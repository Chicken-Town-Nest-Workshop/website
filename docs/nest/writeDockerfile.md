---
sidebar_position: 15
description: NestJS dockerfile
key: [NestJS, Node, TypeScript, Docker, Dockerfile]
tags: [NestJS, Node, TypeScript, Docker, Dockerfile]
---

# 👩‍💻 NestJS 的 dockerfile

## 建立檔案

> 在專案底下建立一個檔案 `dockerfile`

```shell
# node image
FROM node:18-alpine

# 建立app目錄
WORKDIR /usr/src/app

# 複製依賴檔
COPY  package*.json ./

COPY tsconfig*.json ./

# 複製程式碼
COPY . .

# 下載依賴
RUN npm install

# 部屬專案
RUN npm run build

# 啟動服務
CMD [ "node", "dist/main.js" ]
```

> 在專案底下建立一個檔案 `.dockerignore`，來過濾用不到的檔案

```shell
dockerfile
.dockerignore
node_modules
npm-debug.log
dist
```

## 建立 image

```shell
docker build -t nest-app .
```

## 啟動 nest 容器

```shell
docker run -p 80:3050 nest-app 
```
