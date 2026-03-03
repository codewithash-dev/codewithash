from __future__ import annotations

from datetime import datetime, timedelta
from typing import List, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlmodel import Session, select

from .db import ContentMetricsRow, engine, init_db_with_seed


class SummaryResponse(BaseModel):
    total_views: int
    total_likes: int
    total_comments: int
    average_engagement_rate: float
    item_count: int


class TopContentItem(BaseModel):
    id: int
    title: str
    platform: str
    views: int
    likes: int
    comments: int
    engagement_score: float


class InsightsRequest(BaseModel):
    platform: Optional[str] = None
    lookback_days: int = 30


class InsightsResponse(BaseModel):
    summary: SummaryResponse
    insights: List[str]


app = FastAPI(title="Creator Analytics API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    init_db_with_seed()


def _filter_data(
    platform: Optional[str] = None, lookback_days: Optional[int] = None
) -> List[ContentMetricsRow]:
    with Session(engine) as session:
        stmt = select(ContentMetricsRow)
        if platform:
            stmt = stmt.where(ContentMetricsRow.platform == platform)
        if lookback_days is not None:
            cutoff = datetime.utcnow() - timedelta(days=lookback_days)
            stmt = stmt.where(ContentMetricsRow.published_at >= cutoff)
        return list(session.exec(stmt).all())


def _calculate_summary(items: List[ContentMetricsRow]) -> SummaryResponse:
    if not items:
        return SummaryResponse(
            total_views=0,
            total_likes=0,
            total_comments=0,
            average_engagement_rate=0.0,
            item_count=0,
        )

    total_views = sum(i.views for i in items)
    total_likes = sum(i.likes for i in items)
    total_comments = sum(i.comments for i in items)
    item_count = len(items)

    engagement_rates = [
        (i.likes + i.comments) / i.views if i.views > 0 else 0 for i in items
    ]
    avg_engagement = sum(engagement_rates) / len(engagement_rates)

    return SummaryResponse(
        total_views=total_views,
        total_likes=total_likes,
        total_comments=total_comments,
        average_engagement_rate=round(avg_engagement * 100, 2),
        item_count=item_count,
    )


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.get("/analytics/summary", response_model=SummaryResponse)
def analytics_summary(platform: Optional[str] = None, lookback_days: int = 90):
    if lookback_days <= 0:
        raise HTTPException(status_code=400, detail="lookback_days must be positive")
    items = _filter_data(platform=platform, lookback_days=lookback_days)
    return _calculate_summary(items)


@app.get("/analytics/top-content", response_model=List[TopContentItem])
def top_content(limit: int = 5, platform: Optional[str] = None):
    if limit <= 0:
        raise HTTPException(status_code=400, detail="limit must be positive")
    items = _filter_data(platform=platform)
    ranked = sorted(
        items,
        key=lambda i: (i.likes + i.comments) / max(i.views, 1),
        reverse=True,
    )
    trimmed = ranked[:limit]
    return [
        TopContentItem(
            id=i.id,
            title=i.title,
            platform=i.platform,
            views=i.views,
            likes=i.likes,
            comments=i.comments,
            engagement_score=round(
                (i.likes + i.comments) / max(i.views, 1) * 100, 2
            ),
        )
        for i in trimmed
    ]


@app.post("/ai/insights", response_model=InsightsResponse)
def ai_insights(payload: InsightsRequest):
    items = _filter_data(
        platform=payload.platform, lookback_days=payload.lookback_days
    )
    summary = _calculate_summary(items)

    if summary.item_count == 0:
        return InsightsResponse(
            summary=summary,
            insights=[
                "No content found for the selected filters. Try broadening the date range or including more platforms."
            ],
        )

    insights: List[str] = []

    if summary.total_views > 0:
        insights.append(
            f"Across {summary.item_count} pieces of content in the last {payload.lookback_days} days, "
            f"you generated {summary.total_views:,} views with an average engagement rate of "
            f"{summary.average_engagement_rate:.2f}% (likes + comments divided by views)."
        )

    high_engagement = _filter_data(platform=payload.platform)
    high_engagement = sorted(
        high_engagement,
        key=lambda i: (i.likes + i.comments) / max(i.views, 1),
        reverse=True,
    )[:3]
    if high_engagement:
        top_titles = ", ".join(f'"{i.title}"' for i in high_engagement)
        insights.append(
            f"Your best engagement is coming from: {top_titles}. Consider creating follow‑ups or deeper dives on these topics."
        )

    recent = _filter_data(platform=payload.platform, lookback_days=14)
    if recent:
        recent_views = sum(i.views for i in recent)
        insights.append(
            f"In the last 14 days you collected {recent_views:,} views. "
            "If you keep this pace, you are on track to surpass your previous 30‑day period."
        )

    insights.append(
        "Action suggestion: schedule 1‑2 uploads per week that build on your highest‑engagement topics, "
        "and experiment with different thumbnails/titles while keeping the core format consistent."
    )

    return InsightsResponse(summary=summary, insights=insights)


