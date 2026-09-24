// Procedural CAD-style parts, modelled in millimetres in part-local coordinates
// (Y up). Feedback pins in shared/seed.json use the same coordinates.
//
// Each part is built from extrusions and lathe solids arranged so no two
// faces are coplanar, which keeps the feature edges clean.

import * as THREE from 'three';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import type { ModelKind } from '../api/types';

export interface BuiltModel {
  group: THREE.Group;
  meshes: THREE.Mesh[];
  edges: LineSegments2[];
  edgeMaterial: LineMaterial;
  materials: THREE.MeshStandardMaterial[];
  darkFinish: boolean;
}

const CURVE = 40;
const EDGE_ANGLE = 20;

type Corners = { bl: number; br: number; tr: number; tl: number };

function roundedRect(path: THREE.Path, x0: number, y0: number, x1: number, y1: number, r: Corners) {
  path.moveTo(x0 + r.bl, y0);
  path.lineTo(x1 - r.br, y0);
  if (r.br) path.absarc(x1 - r.br, y0 + r.br, r.br, -Math.PI / 2, 0, false);
  path.lineTo(x1, y1 - r.tr);
  if (r.tr) path.absarc(x1 - r.tr, y1 - r.tr, r.tr, 0, Math.PI / 2, false);
  path.lineTo(x0 + r.tl, y1);
  if (r.tl) path.absarc(x0 + r.tl, y1 - r.tl, r.tl, Math.PI / 2, Math.PI, false);
  path.lineTo(x0, y0 + r.bl);
  if (r.bl) path.absarc(x0 + r.bl, y0 + r.bl, r.bl, Math.PI, Math.PI * 1.5, false);
  return path;
}

const all = (r: number): Corners => ({ bl: r, br: r, tr: r, tl: r });

function circle(cx: number, cy: number, r: number) {
  const p = new THREE.Path();
  p.absarc(cx, cy, r, 0, Math.PI * 2, true);
  return p;
}

/** Stadium-shaped slot, `len` end to end, along x or y. */
function slot(cx: number, cy: number, len: number, w: number, axis: 'x' | 'y') {
  const p = new THREE.Path();
  const r = w / 2;
  const h = len / 2 - r;
  if (axis === 'x') {
    p.moveTo(cx - h, cy - r);
    p.lineTo(cx + h, cy - r);
    p.absarc(cx + h, cy, r, -Math.PI / 2, Math.PI / 2, false);
    p.lineTo(cx - h, cy + r);
    p.absarc(cx - h, cy, r, Math.PI / 2, Math.PI * 1.5, false);
  } else {
    p.moveTo(cx + r, cy - h);
    p.lineTo(cx + r, cy + h);
    p.absarc(cx, cy + h, r, 0, Math.PI, false);
    p.lineTo(cx - r, cy - h);
    p.absarc(cx, cy - h, r, Math.PI, Math.PI * 2, false);
  }
  return p;
}

function extrude(shape: THREE.Shape, depth: number) {
  return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: CURVE });
}

/** Extrusion lying flat: shape (x, s) becomes world (x, y=0..depth, z=-s). */
function plateY(shape: THREE.Shape, depth: number) {
  const g = extrude(shape, depth);
  g.rotateX(-Math.PI / 2);
  return g;
}

/**
 * Solid of revolution around +Y with hard edges between profile segments
 * (three's LatheGeometry averages normals across corners, which makes
 * shoulders look rounded). Profile points are [radius, y], traversed so the
 * outside of the solid is on the right-hand side going up.
 */
function latheSolid(profile: [number, number][], segments = 72) {
  const pos: number[] = [];
  const nor: number[] = [];
  const idx: number[] = [];
  let base = 0;
  for (let i = 0; i < profile.length - 1; i++) {
    const [r0, y0] = profile[i];
    const [r1, y1] = profile[i + 1];
    const dr = r1 - r0;
    const dy = y1 - y0;
    const len = Math.hypot(dr, dy);
    if (len < 1e-9) continue;
    const nr = dy / len;
    const ny = -dr / len;
    for (let j = 0; j <= segments; j++) {
      const t = (j / segments) * Math.PI * 2;
      const c = Math.cos(t);
      const s = Math.sin(t);
      pos.push(r0 * c, y0, r0 * s, r1 * c, y1, r1 * s);
      nor.push(nr * c, ny, nr * s, nr * c, ny, nr * s);
    }
    for (let j = 0; j < segments; j++) {
      const a = base + j * 2;
      const b = a + 1;
      const d = a + 2;
      const c2 = a + 3;
      idx.push(a, b, d, b, c2, d);
    }
    base += (segments + 1) * 2;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}

function assemble(parts: { geometry: THREE.BufferGeometry; material: THREE.MeshStandardMaterial }[], darkFinish: boolean): BuiltModel {
  const group = new THREE.Group();
  const meshes: THREE.Mesh[] = [];
  const edges: LineSegments2[] = [];
  const materials = [...new Set(parts.map((p) => p.material))];
  // Push faces back a hair so the feature lines always win the depth test.
  materials.forEach((m) => {
    m.polygonOffset = true;
    m.polygonOffsetFactor = 1;
    m.polygonOffsetUnits = 1;
  });
  // Screen-space width lines (WebGL line width is always 1 device pixel).
  const edgeMaterial = new LineMaterial({ color: 0x111820, linewidth: 1.15, transparent: true, opacity: 0.7, worldUnits: false });
  for (const { geometry, material } of parts) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    meshes.push(mesh);
    const edgeGeo = new THREE.EdgesGeometry(geometry, EDGE_ANGLE);
    const lines = new LineSegments2(new LineSegmentsGeometry().fromEdgesGeometry(edgeGeo), edgeMaterial);
    edgeGeo.dispose();
    lines.renderOrder = 1;
    group.add(lines);
    edges.push(lines);
  }
  return { group, meshes, edges, edgeMaterial, materials, darkFinish };
}

const finishes = {
  clearAnodize: () => new THREE.MeshStandardMaterial({ color: 0xb3bcc7, metalness: 0.7, roughness: 0.36 }),
  blackAnodize: () => new THREE.MeshStandardMaterial({ color: 0x2f353d, metalness: 0.55, roughness: 0.46 }),
  stainless: () => new THREE.MeshStandardMaterial({ color: 0xbcc2c9, metalness: 1.0, roughness: 0.22 }),
  keySteel: () => new THREE.MeshStandardMaterial({ color: 0x7d858f, metalness: 0.9, roughness: 0.35 }),
};

// ---------------------------------------------------------------- parts

/** BRK-2210: L-bracket for a NEMA 23 stepper (Ø38.1 pilot, 47.14 mm bolt square). */
function bracket(): BuiltModel {
  const metal = finishes.clearAnodize();

  // Base plate, 120 × 72 × 8, in front of the upright (z from -32 to 40).
  const base = new THREE.Shape();
  roundedRect(base, -60, -40, 60, 32, { bl: 6, br: 6, tr: 0, tl: 0 });
  base.holes.push(circle(-40, 14, 3.3), circle(40, 14, 3.3), slot(-38, -32, 16, 6.6, 'x'), slot(38, -32, 16, 6.6, 'x'));

  // Upright, 120 × 100 × 8 at the back (z from -40 to -32), top corners R10.
  const upright = new THREE.Shape();
  roundedRect(upright, -60, 0, 60, 100, { bl: 0, br: 0, tr: 10, tl: 10 });
  const b = 47.14 / 2;
  upright.holes.push(
    circle(0, 58, 38.1 / 2),
    circle(-b, 58 - b, 2.75),
    circle(b, 58 - b, 2.75),
    circle(b, 58 + b, 2.75),
    circle(-b, 58 + b, 2.75),
  );
  const uprightGeo = extrude(upright, 8);
  uprightGeo.translate(0, 0, -40);

  // Two 3 mm gussets, inboard of the side faces.
  const tri = new THREE.Shape();
  tri.moveTo(32, 8);
  tri.lineTo(32, 60);
  tri.lineTo(-10, 8);
  tri.lineTo(32, 8);
  const gusset = (x0: number) => {
    const g = extrude(tri, 3);
    g.rotateY(Math.PI / 2);
    g.translate(x0, 0, 0);
    return g;
  };

  return assemble(
    [
      { geometry: plateY(base, 8), material: metal },
      { geometry: uprightGeo, material: metal },
      { geometry: gusset(48), material: metal },
      { geometry: gusset(-51), material: metal },
    ],
    false,
  );
}

/** PLT-1180: 200 × 140 × 10 base plate with the motor pattern and adjustment slots. */
function plate(): BuiltModel {
  const metal = finishes.blackAnodize();
  const shape = new THREE.Shape();
  roundedRect(shape, -100, -70, 100, 70, all(8));
  const b = 47.14 / 2;
  shape.holes.push(
    circle(-88, -58, 4.5),
    circle(88, -58, 4.5),
    circle(88, 58, 4.5),
    circle(-88, 58, 4.5),
    circle(0, 0, 21),
    circle(-b, -b, 2.75),
    circle(b, -b, 2.75),
    circle(b, b, 2.75),
    circle(-b, b, 2.75),
    slot(-60, 0, 30, 9, 'y'),
    slot(60, 0, 30, 9, 'y'),
  );
  return assemble([{ geometry: plateY(shape, 10), material: metal }], true);
}

/** SHF-0412: stepped output shaft, 150 mm long, with a drive key. */
function shaft(): BuiltModel {
  const steel = finishes.stainless();
  const profile: [number, number][] = [
    [0, -75],
    [5, -75],
    [6, -74],
    [6, -45],
    [10, -45],
    [10, -38],
    [7.5, -38],
    [7.5, -24],
    [7, -24],
    [7, 40],
    [6.3, 40],
    [6.3, 41.5],
    [7.5, 41.5],
    [7.5, 52],
    [6, 52],
    [6, 74],
    [5, 75],
    [0, 75],
  ];
  const body = latheSolid(profile);
  body.rotateZ(-Math.PI / 2); // axis along +X
  const key = new THREE.BoxGeometry(14, 4, 4);
  key.translate(64, 6, 0);
  return assemble(
    [
      { geometry: body, material: steel },
      { geometry: key, material: finishes.keySteel() },
    ],
    false,
  );
}

/** HSG-3302: 90 × 60 × 40 sensor housing, 3 mm walls, four screw bosses and a gland boss. */
function housing(): BuiltModel {
  const metal = finishes.blackAnodize();
  const outer = new THREE.Shape();
  roundedRect(outer, -45, -30, 45, 30, all(6));
  const inner = new THREE.Path();
  roundedRect(inner, -42, -27, 42, 27, all(3));
  outer.holes.push(inner);

  const floor = new THREE.Shape();
  roundedRect(floor, -42, -27, 42, 27, all(3));

  const boss = (x: number, z: number) => {
    const g = latheSolid([
      [1.6, 40],
      [1.6, 4],
      [4, 4],
      [4, 40],
      [1.6, 40],
    ], 40);
    g.translate(x, 0, z);
    return g;
  };
  const gland = latheSolid([
    [4.5, 30],
    [7, 30],
    [7, 34],
    [4.5, 34],
    [4.5, 30],
  ], 48);
  gland.rotateX(Math.PI / 2); // axis along +Z, from z = 30 to 34
  gland.translate(20, 22, 0);

  return assemble(
    [
      { geometry: plateY(outer, 40), material: metal },
      { geometry: plateY(floor, 4), material: metal },
      { geometry: boss(-37, -22), material: metal },
      { geometry: boss(37, -22), material: metal },
      { geometry: boss(37, 22), material: metal },
      { geometry: boss(-37, 22), material: metal },
      { geometry: gland, material: metal },
    ],
    true,
  );
}

const builders: Record<ModelKind, () => BuiltModel> = { bracket, plate, shaft, housing };

export function buildModel(kind: ModelKind): BuiltModel {
  return builders[kind]();
}

export function disposeModel(model: BuiltModel) {
  model.meshes.forEach((m) => m.geometry.dispose());
  model.edges.forEach((e) => e.geometry.dispose());
  model.edgeMaterial.dispose();
  model.materials.forEach((m) => m.dispose());
}
