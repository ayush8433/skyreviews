FROM node:20-bookworm-slim

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci

COPY . .

ENV DATABASE_URL="file:/app/data/dev.db"
RUN mkdir -p /app/data /app/public/uploads && npx prisma generate && npx prisma migrate deploy
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production
ENV DATABASE_URL="file:/app/data/dev.db"

ENTRYPOINT ["sh", "-c", "npx prisma migrate deploy && exec npx next start -H 0.0.0.0 -p 3000"]
