"""Drive the whole demo path in a real browser and screenshot each step.

    python e2e/demo_flow.py --url http://127.0.0.1:8000 --out e2e/shots
    python e2e/demo_flow.py --url file:///path/to/web/dist-offline/index.html

Works against the Python server or the single-file offline build.
Exits non-zero if any step doesn't reach the state it should.
"""

from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

from playwright.sync_api import Page, expect, sync_playwright

LAUNCH_ARGS = ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]


def step(name: str) -> None:
    print(f"  - {name}", flush=True)


def confirm_with_suggestion(page: Page, kind: str) -> None:
    page.get_by_role("button", name="Use suggested text").click()
    page.locator(f"[data-testid=confirm-{kind}]").click()


def open_feedback(page: Page, number: int) -> None:
    page.locator(f".balloon[aria-label^='Feedback {number}:']").click()
    expect(page.locator("[data-testid=feedback-detail]")).to_be_visible()


def toggle_chaos(page: Page, name: str) -> None:
    page.locator("button[title='Simulate integration failures']").click()
    page.get_by_role("menuitemcheckbox", name=name).click()
    page.keyboard.press("Escape")


def run(url: str, out: Path, theme: str, width: int, height: int, chaos: bool, dpr: float) -> None:
    out.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(args=LAUNCH_ARGS)
        ctx = browser.new_context(viewport={"width": width, "height": height}, device_scale_factor=dpr, color_scheme=theme)
        ctx.set_default_timeout(45000)
        page = ctx.new_page()
        errors: list[str] = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)

        def shot(name: str) -> None:
            page.screenshot(path=str(out / f"{theme}-{name}.png"))

        page.goto(url)
        band = page.locator("[data-testid=gate-band]")
        expect(band).to_have_attribute("data-outcome", "BLOCKED", timeout=20000)
        page.wait_for_timeout(1800)
        shot("01-blocked")

        step("Request release while blocked: Windchill asks, the gate rejects")
        page.get_by_role("button", name="Request release").click()
        expect(page.locator(".toast.t-error")).to_contain_text("rejected", timeout=10000)
        page.wait_for_timeout(600)
        shot("02-rejected")

        if chaos:
            step("Turn on the Jira outage")
            toggle_chaos(page, "Jira API outage")

        step("Resolve F-101 in CoLab (posts the note and moves ENG-141 in Jira)")
        open_feedback(page, 1)
        page.wait_for_timeout(900)
        shot("03-selected")
        page.locator("[data-testid=resolve]").click()
        confirm_with_suggestion(page, "resolve")
        if chaos:
            page.wait_for_timeout(4500)
            page.get_by_role("tab", name="Checks").click()
            expect(page.locator("[data-testid=check-systems-in-sync]")).to_have_attribute("data-status", "fail")
            shot("03b-outage-retrying")
            step("Jira recovers; the outbox drains")
            toggle_chaos(page, "Jira API outage")
            expect(page.locator("[data-testid=check-systems-in-sync]")).to_have_attribute("data-status", "pass", timeout=20000)
        page.wait_for_timeout(1500)
        shot("04-resolved")

        step("Close ENG-142 on the mock Jira board (the webhook resolves F-102)")
        page.locator("[data-testid=tab-jira]").click()
        page.locator("[data-testid=move-ENG-142-Done]").click()
        page.wait_for_timeout(1800)
        shot("05-jira-closed")
        page.get_by_role("tab", name="Checks").click()
        expect(page.locator("[data-testid=check-critical-closed]")).to_have_attribute("data-status", "pass", timeout=8000)

        step("Dismiss AutoReview finding F-104 with a reason")
        open_feedback(page, 4)
        page.locator("[data-testid=dismiss]").click()
        confirm_with_suggestion(page, "dismiss")
        page.wait_for_timeout(800)

        step("Waive F-103 with a reason")
        open_feedback(page, 3)
        page.locator("[data-testid=waive]").click()
        confirm_with_suggestion(page, "waive")
        page.wait_for_timeout(1500)
        page.get_by_role("tab", name="Integration log").click()
        shot("06-waived")

        step("Nudge Priya for the Quality review")
        page.get_by_role("tab", name="Checks").click()
        page.get_by_role("button", name="Nudge").click()
        expect(band).to_have_attribute("data-outcome", "READY", timeout=12000)
        page.wait_for_timeout(1200)
        shot("07-ready")

        step("Release Rev C: Windchill asks, the gate approves, Windchill confirms")
        page.locator("[data-testid=release]").click()
        expect(band).to_have_attribute("data-outcome", "RELEASED", timeout=15000)
        expect(page.locator("[data-testid=stamp]")).to_be_visible()
        page.wait_for_timeout(1400)
        shot("08-released")

        step("Windchill shows the promotion and the attached review record")
        page.locator("[data-testid=tab-plm]").click()
        expect(page.locator("[data-testid=plm-state-BRK-2210]")).to_have_text("Released", timeout=8000)
        expect(page.locator(".attachment .name", has_text="review-record")).to_have_count(1, timeout=10000)
        page.wait_for_timeout(600)
        shot("09-windchill")

        step("Open the review record")
        page.get_by_role("button", name="Review record").click()
        expect(page.locator("[data-testid=record]")).to_be_visible(timeout=8000)
        page.wait_for_timeout(500)
        shot("10-record")
        page.keyboard.press("Escape")

        browser.close()
        if errors:
            print("Browser errors:\n  " + "\n  ".join(errors))
            raise SystemExit(1)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default="http://127.0.0.1:8000/")
    ap.add_argument("--out", default=str(Path(__file__).parent / "shots"))
    ap.add_argument("--theme", default="light", choices=["light", "dark"])
    ap.add_argument("--width", type=int, default=1512)
    ap.add_argument("--height", type=int, default=945)
    ap.add_argument("--chaos", action="store_true", help="also run the Jira outage scenario")
    ap.add_argument("--dpr", type=float, default=1, help="device pixel ratio for screenshots (2 is slow in headless)")
    args = ap.parse_args()
    started = time.time()
    print(f"Demo flow against {args.url} ({args.theme})")
    run(args.url, Path(args.out), args.theme, args.width, args.height, args.chaos, args.dpr)
    print(f"All steps passed in {time.time() - started:.1f} s")


if __name__ == "__main__":
    sys.exit(main())
