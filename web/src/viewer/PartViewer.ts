// A small CAD-style viewer: lit metal part, feature edges, soft shadow, and
// feedback pins drawn as drawing "balloons" with leader lines. The DOM overlay
// is updated imperatively every frame (no React re-renders while orbiting).

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { ModelKind } from '../api/types';
import { buildModel, disposeModel, type BuiltModel } from './models';

export type PinTone = 'critical' | 'high' | 'medium' | 'low' | 'resolved' | 'waived' | 'dismissed';

export interface PinSpec {
  id: string;
  number: number;
  tone: PinTone;
  ai: boolean;
  closed: boolean;
  title: string;
  x: number;
  y: number;
  z: number;
  nx: number;
  ny: number;
  nz: number;
}

export type ViewName = 'fit' | 'front' | 'top' | 'right';

const MM = 0.01; // model is authored in millimetres; 1 world unit = 100 mm
const ISO = new THREE.Vector3(0.95, 0.78, 1.28).normalize();
const VIEWS: Record<ViewName, THREE.Vector3> = {
  fit: ISO,
  front: new THREE.Vector3(0, 0.14, 1).normalize(),
  top: new THREE.Vector3(0.0001, 1, 0.02).normalize(),
  right: new THREE.Vector3(1, 0.14, 0.0001).normalize(),
};
const SVG_NS = 'http://www.w3.org/2000/svg';

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

interface PinEls {
  wrap: HTMLDivElement;
  btn: HTMLButtonElement;
  line: SVGLineElement;
  dot: SVGCircleElement;
}

interface Tween {
  from: { pos: THREE.Vector3; target: THREE.Vector3 };
  to: { pos: THREE.Vector3; target: THREE.Vector3 };
  start: number;
  duration: number;
}

export class PartViewer {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 1, 0.01, 200);
  private controls: OrbitControls;
  private root = new THREE.Group();
  private model: BuiltModel | null = null;
  private kind: ModelKind | null = null;
  private ground: THREE.Mesh<THREE.PlaneGeometry, THREE.ShadowMaterial>;
  private keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
  private fill = new THREE.HemisphereLight(0xe8eef7, 0x39424d, 0.55);
  private overlay: HTMLDivElement;
  private svg: SVGSVGElement;
  private pins: PinSpec[] = [];
  private pinEls = new Map<string, PinEls>();
  private occluded = new Map<string, boolean>();
  private selected: string | null = null;
  private marker: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private halo: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private tween: Tween | null = null;
  private raf = 0;
  private frame = 0;
  private dirty = true;
  private dark = false;
  private radius = 1;
  private center = new THREE.Vector3();
  private resizeObserver: ResizeObserver;
  private raycaster = new THREE.Raycaster();
  private pointerDown: { x: number; y: number } | null = null;
  private glow = 0;
  private toneColors: Record<PinTone, THREE.Color> = {} as Record<PinTone, THREE.Color>;

  constructor(
    private container: HTMLElement,
    private onSelect: (id: string | null) => void,
  ) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.className = 'viewer-canvas';
    this.renderer.domElement.setAttribute('aria-label', '3D model of the part with feedback pins');
    container.appendChild(this.renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    this.keyLight.shadow.bias = -0.0004;
    this.keyLight.shadow.radius = 4;
    this.scene.add(this.keyLight, this.keyLight.target, this.fill, this.root);

    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.16 }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    const ringMat = (o: number) =>
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: o, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4 });
    this.marker = new THREE.Mesh(new THREE.RingGeometry(6.2 * MM, 7.6 * MM, 48), ringMat(0.95));
    this.halo = new THREE.Mesh(new THREE.RingGeometry(7.6 * MM, 12 * MM, 48), ringMat(0.22));
    this.marker.visible = this.halo.visible = false;
    this.marker.renderOrder = this.halo.renderOrder = 2;
    this.scene.add(this.marker, this.halo);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.09;
    this.controls.rotateSpeed = 0.8;
    this.controls.zoomSpeed = 0.9;
    this.controls.addEventListener('start', () => {
      this.tween = null;
    });
    this.controls.addEventListener('change', () => {
      this.dirty = true;
    });

    this.overlay = document.createElement('div');
    this.overlay.className = 'viewer-overlay';
    this.svg = document.createElementNS(SVG_NS, 'svg');
    this.svg.setAttribute('class', 'viewer-leaders');
    this.overlay.appendChild(this.svg);
    container.appendChild(this.overlay);

    const canvas = this.renderer.domElement;
    canvas.addEventListener('pointerdown', (e) => {
      this.pointerDown = { x: e.clientX, y: e.clientY };
    });
    canvas.addEventListener('pointerup', (e) => {
      const d = this.pointerDown;
      this.pointerDown = null;
      if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 4) this.onSelect(null);
    });

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.readTones();
    this.loop();
  }

  // ------------------------------------------------------------ public

  setModel(kind: ModelKind) {
    if (kind === this.kind) return;
    this.kind = kind;
    if (this.model) {
      this.root.remove(this.model.group);
      disposeModel(this.model);
    }
    const model = buildModel(kind);
    this.model = model;
    this.root.add(model.group);
    this.root.scale.setScalar(MM);
    this.root.position.set(0, 0, 0);
    this.root.updateMatrixWorld(true);

    // Sit the part on the ground, centred.
    const box = new THREE.Box3().setFromObject(model.group);
    const c = box.getCenter(new THREE.Vector3());
    this.root.position.set(-c.x, -box.min.y, -c.z);
    this.root.updateMatrixWorld(true);
    const worldBox = new THREE.Box3().setFromObject(model.group);
    const sphere = worldBox.getBoundingSphere(new THREE.Sphere());
    this.center.copy(sphere.center);
    this.radius = sphere.radius;

    const r = this.radius;
    this.keyLight.position.set(r * 1.6, r * 3.2, r * 2.2);
    this.keyLight.target.position.copy(this.center);
    const cam = this.keyLight.shadow.camera;
    cam.left = cam.bottom = -r * 1.6;
    cam.right = cam.top = r * 1.6;
    cam.near = 0.01;
    cam.far = r * 8;
    cam.updateProjectionMatrix();

    this.controls.minDistance = r * 0.7;
    this.controls.maxDistance = r * 7;
    model.edgeMaterial.resolution.set(Math.max(1, this.container.clientWidth), Math.max(1, this.container.clientHeight));
    this.applyTheme();

    // Arrive with a short dolly-in.
    const to = this.viewPose('fit');
    this.camera.position.copy(to.target).addScaledVector(ISO, to.pos.distanceTo(to.target) * 1.45);
    this.controls.target.copy(to.target);
    this.animateTo(to, 900);
  }

  setPins(pins: PinSpec[]) {
    this.pins = pins;
    const keep = new Set(pins.map((p) => p.id));
    for (const [id, els] of this.pinEls) {
      if (!keep.has(id)) {
        els.wrap.remove();
        els.line.remove();
        els.dot.remove();
        this.pinEls.delete(id);
      }
    }
    for (const pin of pins) {
      let els = this.pinEls.get(pin.id);
      if (!els) {
        const wrap = document.createElement('div');
        wrap.className = 'balloon-wrap';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.onSelect(pin.id);
        });
        btn.addEventListener('pointerdown', (e) => e.stopPropagation());
        wrap.appendChild(btn);
        this.overlay.appendChild(wrap);
        const line = document.createElementNS(SVG_NS, 'line');
        const dot = document.createElementNS(SVG_NS, 'circle');
        dot.setAttribute('r', '3');
        this.svg.append(line, dot);
        els = { wrap, btn, line, dot };
        this.pinEls.set(pin.id, els);
      }
      const current = this.pins.find((p) => p.id === pin.id)!;
      els.btn.className = `balloon tone-${current.tone}${current.closed ? ' is-closed' : ''}${current.ai ? ' is-ai' : ''}`;
      els.btn.innerHTML = `<span>${current.number}</span>${current.ai ? '<i class="balloon-ai" aria-hidden="true"></i>' : ''}`;
      els.btn.setAttribute('aria-label', `Feedback ${current.number}: ${current.title}`);
      els.btn.title = `${current.number}. ${current.title}`;
      els.line.setAttribute('class', `leader tone-${current.tone}`);
      els.dot.setAttribute('class', `anchor tone-${current.tone}`);
    }
    this.syncSelection();
    this.dirty = true;
  }

  setSelected(id: string | null, focus: boolean) {
    this.selected = id;
    this.syncSelection();
    if (id && focus) this.focus(id);
    this.dirty = true;
  }

  setTheme(dark: boolean) {
    this.dark = dark;
    this.applyTheme();
  }

  view(name: ViewName) {
    this.animateTo(this.viewPose(name), 700);
  }

  celebrate() {
    this.glow = 1;
    this.dirty = true;
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.resizeObserver.disconnect();
    this.controls.dispose();
    if (this.model) disposeModel(this.model);
    this.renderer.dispose();
    this.overlay.remove();
    this.renderer.domElement.remove();
  }

  // ----------------------------------------------------------- internals

  private readTones() {
    const css = getComputedStyle(this.container);
    const read = (v: string, fallback: string) => new THREE.Color((css.getPropertyValue(v) || fallback).trim());
    this.toneColors = {
      critical: read('--crit', '#cf3a34'),
      high: read('--high', '#db6a1f'),
      medium: read('--med', '#c08a0c'),
      low: read('--low', '#6b788b'),
      resolved: read('--pass', '#148a58'),
      waived: read('--waived', '#6d5fc7'),
      dismissed: read('--faint', '#95a1b1'),
    };
  }

  private applyTheme() {
    this.readTones();
    const darkPart = this.model?.darkFinish ?? false;
    let color = 0x0d131b;
    let opacity = 0.72;
    if (this.dark && darkPart) {
      color = 0xa9b8ca;
      opacity = 0.5;
    } else if (this.dark) {
      color = 0x06090d;
      opacity = 0.85;
    } else if (darkPart) {
      color = 0x04070a;
      opacity = 0.85;
    }
    if (this.model) {
      this.model.edgeMaterial.color.setHex(color);
      this.model.edgeMaterial.opacity = opacity;
    }
    this.ground.material.opacity = this.dark ? 0.55 : 0.26;
    this.fill.intensity = this.dark ? 0.45 : 0.5;
    this.keyLight.intensity = this.dark ? 1.7 : 2.1;
    this.scene.environmentIntensity = this.dark ? 0.85 : 0.8;
    this.syncSelection();
    this.dirty = true;
  }

  /** Lens shift so the part sits clear of the title block (bottom right). */
  private applyViewOffset() {
    const w = Math.max(1, this.container.clientWidth);
    const h = Math.max(1, this.container.clientHeight);
    const wide = w > 720;
    const short = h < 520;
    this.camera.setViewOffset(w, h, wide ? w * (short ? 0.09 : 0.075) : 0, wide ? h * (short ? 0.085 : 0.05) : 0, w, h);
  }

  private resize() {
    const w = Math.max(1, this.container.clientWidth);
    const h = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.applyViewOffset();
    this.camera.updateProjectionMatrix();
    this.model?.edgeMaterial.resolution.set(w, h);
    this.svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    this.dirty = true;
  }

  private fitDistance() {
    const vFov = THREE.MathUtils.degToRad(this.camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
    const d = this.radius / Math.sin(Math.min(vFov, hFov) / 2);
    return d * 1.12;
  }

  private viewPose(name: ViewName) {
    const target = this.center.clone();
    const pos = target.clone().addScaledVector(VIEWS[name], this.fitDistance());
    return { pos, target };
  }

  private animateTo(to: { pos: THREE.Vector3; target: THREE.Vector3 }, duration: number) {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.camera.position.copy(to.pos);
      this.controls.target.copy(to.target);
      this.dirty = true;
      return;
    }
    this.tween = {
      from: { pos: this.camera.position.clone(), target: this.controls.target.clone() },
      to,
      start: performance.now(),
      duration,
    };
  }

  private worldPin(pin: PinSpec) {
    const p = this.root.localToWorld(new THREE.Vector3(pin.x, pin.y, pin.z));
    const n = new THREE.Vector3(pin.nx, pin.ny, pin.nz).normalize();
    return { p, n };
  }

  private focus(id: string) {
    const pin = this.pins.find((x) => x.id === id);
    if (!pin) return;
    const { p, n } = this.worldPin(pin);
    const current = this.camera.position.clone().sub(this.controls.target).normalize();
    // Lean toward the pin's face, but keep most of the current viewing angle
    // so the part doesn't spin around under the viewer.
    const dir = n.clone().multiplyScalar(0.55).add(current.multiplyScalar(0.8)).add(new THREE.Vector3(0, 0.2, 0)).normalize();
    const target = p.clone().lerp(this.center, 0.45);
    const pos = target.clone().addScaledVector(dir, this.fitDistance() * 0.86);
    this.animateTo({ pos, target }, 750);
  }

  private syncSelection() {
    const pin = this.selected ? this.pins.find((p) => p.id === this.selected) : undefined;
    for (const [id, els] of this.pinEls) els.wrap.classList.toggle('is-selected', id === this.selected);
    if (!pin) {
      this.marker.visible = this.halo.visible = false;
      return;
    }
    const { p, n } = this.worldPin(pin);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    for (const m of [this.marker, this.halo]) {
      m.visible = true;
      m.position.copy(p).addScaledVector(n, 0.25 * MM);
      m.quaternion.copy(q);
      m.material.color.copy(this.toneColors[pin.tone] ?? new THREE.Color('#2448d0'));
    }
  }

  private project(v: THREE.Vector3, w: number, h: number) {
    const p = v.clone().project(this.camera);
    return { x: (p.x + 1) * 0.5 * w, y: (1 - p.y) * 0.5 * h, behind: p.z > 1 };
  }

  private updateOcclusion() {
    if (!this.model) return;
    const cam = this.camera.position;
    for (const pin of this.pins) {
      const { p } = this.worldPin(pin);
      const dir = p.clone().sub(cam);
      const dist = dir.length();
      this.raycaster.set(cam, dir.normalize());
      this.raycaster.near = 0;
      this.raycaster.far = dist - 0.6 * MM;
      const hit = this.raycaster.intersectObjects(this.model.meshes, false).length > 0;
      this.occluded.set(pin.id, hit);
    }
  }

  private updateOverlay() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    type Item = { pin: PinSpec; els: PinEls; ax: number; ay: number; bx: number; by: number; hidden: boolean };
    const items: Item[] = [];
    for (const pin of this.pins) {
      const els = this.pinEls.get(pin.id);
      if (!els) continue;
      const { p, n } = this.worldPin(pin);
      const a = this.project(p, w, h);
      const b = this.project(p.clone().addScaledVector(n, 20 * MM), w, h);
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      const len = Math.hypot(dx, dy);
      if (len < 6) {
        dx = 0.72;
        dy = -0.7;
      } else {
        dx /= len;
        dy /= len;
      }
      const reach = pin.id === this.selected ? 58 : 46;
      items.push({ pin, els, ax: a.x, ay: a.y, bx: a.x + dx * reach, by: a.y + dy * reach, hidden: a.behind });
    }
    // Nudge overlapping balloons apart.
    for (let iter = 0; iter < 5; iter++) {
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          const A = items[i];
          const B = items[j];
          const dx = B.bx - A.bx;
          const dy = B.by - A.by;
          const d = Math.hypot(dx, dy) || 0.01;
          const min = 31;
          if (d < min) {
            const push = (min - d) / 2;
            A.bx -= (dx / d) * push;
            A.by -= (dy / d) * push;
            B.bx += (dx / d) * push;
            B.by += (dy / d) * push;
          }
        }
      }
    }
    for (const it of items) {
      const bx = Math.max(16, Math.min(w - 16, it.bx));
      const by = Math.max(16, Math.min(h - 16, it.by));
      const hidden = it.hidden;
      const occluded = this.occluded.get(it.pin.id) ?? false;
      it.els.wrap.style.transform = `translate3d(${bx.toFixed(1)}px, ${by.toFixed(1)}px, 0)`;
      it.els.wrap.classList.toggle('is-occluded', occluded && it.pin.id !== this.selected);
      it.els.wrap.style.visibility = hidden ? 'hidden' : '';
      const dx = it.ax - bx;
      const dy = it.ay - by;
      const d = Math.hypot(dx, dy) || 1;
      const r = it.pin.id === this.selected ? 16 : 13;
      it.els.line.setAttribute('x1', (bx + (dx / d) * r).toFixed(1));
      it.els.line.setAttribute('y1', (by + (dy / d) * r).toFixed(1));
      it.els.line.setAttribute('x2', it.ax.toFixed(1));
      it.els.line.setAttribute('y2', it.ay.toFixed(1));
      it.els.dot.setAttribute('cx', it.ax.toFixed(1));
      it.els.dot.setAttribute('cy', it.ay.toFixed(1));
      const cls = occluded && it.pin.id !== this.selected ? ' is-occluded' : '';
      it.els.line.setAttribute('class', `leader tone-${it.pin.tone}${cls}`);
      it.els.dot.setAttribute('class', `anchor tone-${it.pin.tone}${cls}`);
      it.els.line.style.visibility = it.els.dot.style.visibility = hidden ? 'hidden' : '';
    }
  }

  private loop = () => {
    this.raf = requestAnimationFrame(this.loop);
    this.frame++;
    const now = performance.now();
    if (this.tween) {
      const t = Math.min(1, (now - this.tween.start) / this.tween.duration);
      const k = ease(t);
      this.camera.position.lerpVectors(this.tween.from.pos, this.tween.to.pos, k);
      this.controls.target.lerpVectors(this.tween.from.target, this.tween.to.target, k);
      this.dirty = true;
      if (t >= 1) this.tween = null;
    }
    const moved = this.controls.update();
    if (this.selected) {
      const pulse = 1 + 0.18 * Math.sin(now / 260);
      this.halo.scale.setScalar(pulse);
      this.halo.material.opacity = 0.16 + 0.08 * Math.sin(now / 260);
      this.dirty = true;
    }
    if (this.glow > 0 && this.model) {
      this.glow = Math.max(0, this.glow - 0.012);
      const c = this.toneColors.resolved;
      this.model.materials.forEach((m) => {
        m.emissive.copy(c);
        m.emissiveIntensity = 0.35 * Math.sin(this.glow * Math.PI);
      });
      this.dirty = true;
    }
    if (!this.dirty && !moved) return;
    if (moved || this.frame % 6 === 0 || this.dirty) {
      if (this.frame % 3 === 0 || !moved) this.updateOcclusion();
    }
    this.renderer.render(this.scene, this.camera);
    this.updateOverlay();
    this.dirty = false;
  };
}
