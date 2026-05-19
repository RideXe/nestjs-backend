# NestJS Backend

A simple NestJS backend application with a health check endpoint.

## Setup

```bash
npm install
```

## Run

```bash
# development
npm run start:dev

# production
npm run start
```

## Endpoints

| Method | Route | Response |
|--------|-------|----------|
| GET | `/` | Hello World! |
| GET | `/health` | `{ "status": "ok" }` |