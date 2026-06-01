# SkyReviews – Deployment (skyreviews.us)

## Location

- **App:** `/root/skyreviews`
- **Container:** `skyreviews-web`
- **Port:** 3080 (nginx proxies `skyreviews.us` → `127.0.0.1:3080`)

## Deploy / update

```bash
cd /root/skyreviews
docker compose build
docker compose up -d --force-recreate
```

## Stop

```bash
cd /root/skyreviews
docker compose down
```

## Notes

- SQLite DB is persisted at `prisma/dev.db` (mounted into the container).
- The previous Sky States React stack (`/root/skystates`) was stopped to free port 3080.

## First-Run Setup (Fresh Database)

If you are setting up the environment for the very first time and need to populate the initial fallback content (stories and testimonials) into an empty database:

```bash
docker exec skyreviews-web npx prisma db seed
```
(Note: Redployments automatically run migrations but do *not* run the seed script to avoid overwriting your live content.)
