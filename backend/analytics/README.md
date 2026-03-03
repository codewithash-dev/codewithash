# Creator Analytics Backend (Python)

Small FastAPI service that powers the Creator Analytics & AI Insights project on Code With Ash.

## Quick start

1. Create and activate a virtual environment.
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the API locally:

```bash
uvicorn app.main:app --reload --port 8000
```

4. Configure the frontend with the base URL:

- Set `NEXT_PUBLIC_ANALYTICS_API_URL` in your Next.js environment (for local dev, this is typically `http://localhost:8000`).

## Environment variables

The current version keeps data in memory and generates insights heuristically, so no keys are required.
You can later extend the `/ai/insights` endpoint to call an external LLM provider if desired.

