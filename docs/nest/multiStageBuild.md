---
sidebar_position: 30
description: Multi-stage Build
key: [NestJS, Node, TypeScript, Docker, Dockerfile]
tags: [NestJS, Node, TypeScript, Docker, Dockerfile]
---

# 👩‍💻 Multi-stage Build

## 為何要使用 Multi-stage Build

> 在直接建立 nest 的 docker image 時，
>
> image 至少會 400 多 mb，如果要進行瘦身打包那勢必需要執行此動作

## 試做 nest Multi-stage Build

### dockerfile

> 此步驟是先使用開發環境進行打包，接下來依靠 pnpm 來安裝生產環境所需要用到的依賴

```shell
# development image
FROM node:alpine AS development

# 建立app目錄
WORKDIR /usr/src/app

# 複製依賴檔
COPY  package*.json ./

COPY tsconfig*.json ./

# 下載 pnpm
RUN npm i -g pnpm

# 複製程式碼
COPY . . /usr/src/app/

# 下載依賴
RUN pnpm install -r

# 部屬專案
RUN pnpm run build

# production image
FROM node:alpine AS production

# 建立app目錄
WORKDIR /usr/src/app

# 複製依賴檔
COPY package.json ./

COPY pnpm-lock.yaml ./

# 下載 pnpm
RUN npm i -g pnpm

# 下載依賴(只下載需使用的依賴)
RUN pnpm install --prod

# 複製剛剛打包的檔案
COPY --from=development /usr/src/app/dist ./dist

# 啟動服務
CMD [ "node", "dist/main.js" ]
```

---
ref:

[Multi-stage Build, Miles](https://ithelp.ithome.com.tw/articles/10247981?sc=hot)

[梁大哥 github](https://github.com/nodejs-typescript-classroom/learn-sleepr/blob/master/apps/notifications/Dockerfile)
