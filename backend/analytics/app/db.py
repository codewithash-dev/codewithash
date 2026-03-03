from __future__ import annotations

import os
from datetime import datetime, timedelta
from typing import Iterable, Optional

from dotenv import load_dotenv
from sqlmodel import Field, SQLModel, Session, create_engine, select


class ContentMetricsRow(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    platform: str
    views: int
    likes: int
    comments: int
    published_at: datetime
    last_updated_at: datetime


def get_engine():
    # Load environment variables from .env so DATABASE_URL is picked up in local dev
    load_dotenv()
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        database_url = "sqlite:///./analytics.db"
    connect_args = {"check_same_thread": False} if database_url.startswith("sqlite") else {}
    return create_engine(database_url, echo=False, connect_args=connect_args)


engine = get_engine()


def init_db_with_seed() -> None:
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        count = session.exec(select(ContentMetricsRow).limit(1)).first()
        if count:
            return

        now = datetime.utcnow()
        seed_rows: Iterable[ContentMetricsRow] = [
            ContentMetricsRow(
                title="Building a Full Stack E‑Commerce App",
                platform="youtube",
                views=42000,
                likes=3100,
                comments=220,
                published_at=now - timedelta(days=60),
                last_updated_at=now - timedelta(days=1),
            ),
            ContentMetricsRow(
                title="React Native Social Media Feed UI",
                platform="youtube",
                views=28000,
                likes=1900,
                comments=150,
                published_at=now - timedelta(days=35),
                last_updated_at=now - timedelta(hours=12),
            ),
            ContentMetricsRow(
                title="Supabase Auth + Chat in 30 Minutes",
                platform="youtube",
                views=35000,
                likes=2700,
                comments=310,
                published_at=now - timedelta(days=20),
                last_updated_at=now - timedelta(hours=6),
            ),
            ContentMetricsRow(
                title="Expo URL Shortener Mobile App",
                platform="youtube",
                views=18000,
                likes=1200,
                comments=80,
                published_at=now - timedelta(days=10),
                last_updated_at=now - timedelta(hours=3),
            ),
        ]

        for row in seed_rows:
            session.add(row)
        session.commit()

