"""FastAPI application factory."""

from __future__ import annotations

from contextlib import asynccontextmanager
from typing import Callable, Optional

import httpx
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from strawberry.fastapi import GraphQLRouter

from . import __version__, lifecycle
from .api import router as api_router
from .config import WEB_DIST, Settings
from .context import AppContext
from .mocks.jira import JiraMock
from .mocks.jira import router as jira_router
from .mocks.windchill import WindchillMock
from .mocks.windchill import router as windchill_router
from .schema import schema
from .webhooks import router as webhooks_router

HttpFactory = Callable[[FastAPI], httpx.AsyncClient]


def create_app(settings: Optional[Settings] = None, http_factory: Optional[HttpFactory] = None) -> FastAPI:
    settings = settings or Settings.from_env()
    ctx = AppContext(settings)
    ctx.jira = JiraMock(ctx)
    ctx.windchill = WindchillMock(ctx)

    @asynccontextmanager
    async def lifespan(app: FastAPI):
        ctx.http = http_factory(app) if http_factory else httpx.AsyncClient(timeout=settings.http_timeout_s)
        lifecycle.start(ctx)
        try:
            yield
        finally:
            await lifecycle.stop(ctx)
            await ctx.http.aclose()

    app = FastAPI(
        title="Release Gate",
        version=__version__,
        description="Blocks a PLM release until the CoLab design review says it's ready.",
        lifespan=lifespan,
        docs_url="/api/docs",
        redoc_url=None,
        openapi_url="/api/openapi.json",
    )
    app.state.ctx = ctx
    app.include_router(api_router, tags=["console"])
    app.include_router(webhooks_router, tags=["webhooks"])
    app.include_router(jira_router, prefix="/mock/jira", tags=["mock jira"])
    app.include_router(windchill_router, prefix="/mock/windchill", tags=["mock windchill"])
    app.include_router(GraphQLRouter(schema), prefix="/graphql")

    if settings.serve_web and (WEB_DIST / "index.html").exists():
        app.mount("/", StaticFiles(directory=str(WEB_DIST), html=True), name="web")
    return app
