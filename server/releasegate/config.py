from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SHARED_DIR = ROOT / "shared"
WEB_DIST = ROOT / "web" / "dist"

# The integration signs in to Jira and Windchill as a service account. Webhooks
# caused by this account are echoes of our own writes.
INTEGRATION_ACCOUNT_ID = "svc-colab-release-gate"
INTEGRATION_DISPLAY_NAME = "CoLab Release Gate"


@dataclass
class Settings:
    """Runtime settings. Defaults are tuned for a live demo on one laptop."""

    base_url: str = "http://127.0.0.1:8000"
    database_url: str = f"sqlite:///{ROOT / 'release_gate.db'}"

    # Shared secrets for signed webhooks (HMAC-SHA256).
    jira_webhook_secret: str = "demo-jira-webhook-secret"
    plm_shared_secret: str = "demo-windchill-shared-secret"

    # Credentials the connectors present to the (mock) external systems.
    jira_user: str = "release-gate@kestrel.example"
    jira_api_token: str = "demo-token"
    windchill_user: str = "svc-release-gate"
    windchill_password: str = "demo-password"

    # Outbox retry policy: exponential backoff with jitter.
    retry_base_s: float = 1.0
    retry_cap_s: float = 8.0
    max_attempts: int = 6

    http_timeout_s: float = 4.0
    # How long mock Jira waits before sending a webhook, like the real thing.
    webhook_delay_s: float = 0.35
    # How long the simulated reviewer takes to respond to a nudge.
    reviewer_delay_s: float = 2.2
    # Artificial latency added by the "slow network" chaos switch.
    slow_network_s: float = 0.6

    serve_web: bool = True

    @property
    def jira_url(self) -> str:
        return f"{self.base_url}/mock/jira"

    @property
    def windchill_url(self) -> str:
        return f"{self.base_url}/mock/windchill"

    @classmethod
    def from_env(cls, **overrides) -> "Settings":
        s = cls(**overrides)
        if os.getenv("RG_BASE_URL"):
            s.base_url = os.environ["RG_BASE_URL"].rstrip("/")
        if os.getenv("RG_DATABASE_URL"):
            s.database_url = os.environ["RG_DATABASE_URL"]
        return s
