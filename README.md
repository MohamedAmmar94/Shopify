# Shopify

# Shopify

E-commerce platform built with Node.js, Express, MongoDB, Redis, and React.

## Development environment

The development stack is orchestrated with Docker Compose.

| Service | Local URL / Port |
|---|---|
| React + Vite | http://localhost:5173 |
| Node.js API | http://localhost:5000 |
| MongoDB | localhost:27017 |
| Mongo Express | http://localhost:8081 |
| Redis | localhost:6379 |

## Getting started

1. Copy `.env.example` to `.env`.
2. Run `docker compose up --build`.
3. Open the frontend at http://localhost:5173.
4. Open Mongo Express at http://localhost:8081.

Mongo Express credentials are configured in `.env`.

## Health check

Open http://localhost:5000/api/health to check the API, MongoDB, and Redis connections.

> Development credentials are for local use only. Replace them and use production-specific configuration before deployment.


## Shopify Development Stack

[Development Stack Diagram]

## Tech Stack

## Getting Started

## Project Structure

## Development Workflow

## Features

## Architecture