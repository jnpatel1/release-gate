"""Start, stop and reset the demo world."""

from __future__ import annotations

from .outbox import OutboxWorker
from .seed import seed_all


def start(ctx) -> None:
    ctx.create_schema(drop=True)
    seed_all(ctx)
    ctx.worker = OutboxWorker(ctx)
    ctx.worker.start()


async def stop(ctx) -> None:
    if ctx.worker is not None:
        await ctx.worker.stop()
    await ctx.cancel_tasks()


async def reset_demo(ctx) -> None:
    await stop(ctx)
    start(ctx)
    ctx.hub.publish("reset", {})
