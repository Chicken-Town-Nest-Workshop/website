---
sidebar_position: 20
description: NestJS dockerfile
key: [NestJS, Node, TypeScript, Docker, Docker Compose, Postgresql]
tags: [NestJS, Node, TypeScript, Docker, Docker Compose, Postgresql]
---

# 🐔 NestJS 的 Docker Compose

## 環境

- NestJs
- Postgresql

## Docker Compose 準備

### 撰寫 dockerfile

> 參考 [🐔 NestJS 的 dockerfile](https://blog.lychicken.com/docs/daylily/nestDaylily/writeDockerfile) 撰寫 dockerfile

### 撰寫 docker-compose.yml

> 在專案底下建立 `docker-compose.yml`

```yml
version: '3.8'
services:
  nest-app:
    container_name: nest-app
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:3050"
    depends_on:
      - postgres
    environment:
      POSTGRES_HOST: postgres
      POSTGRES_PORT: 5432
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: test123
      POSTGRES_DB: [your_database_name]

  postgres:
    container_name: postgres12
    image: postgres:12.3
    environment:
      POSTGRES_PASSWORD: test123
    ports:
      - "5432:5432"
```

### 啟動

```shell
docker-compose up
```
