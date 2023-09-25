---
sidebar_position: 10
description: 關於 NestJS
key: [NestJS, Node, TypeScript]
tags: [NestJS, Node, TypeScript]
---

# 👩‍💻 NestJS 設定啟動 Port

> 於檔案 src/main.ts

```js {6}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3050);
}
bootstrap();
```
