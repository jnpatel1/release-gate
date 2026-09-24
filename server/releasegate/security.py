"""HMAC signatures for webhooks in both directions."""

from __future__ import annotations

import hashlib
import hmac
from typing import Optional


def sign(secret: str, body: bytes) -> str:
    return "sha256=" + hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()


def verify(secret: str, body: bytes, header: Optional[str]) -> bool:
    if not header:
        return False
    return hmac.compare_digest(sign(secret, body), header.strip())
