---
sidebar_position: 70
description: Exception filter
key: [NestJS, Node, TypeScript]
tags: [NestJS, Node, TypeScript]
---

# 🐔 Exception filter

## 定義

### 關於 Exception

> exception 指的是程式執行過程中，發生的例外狀況
>
> 導致程式沒辦法正確的執行

### 關於 filter

> filter 的生命週期會是，在客戶端 API 發送後，先抵達 controller，接下來才會回到 filter

### 關於 Exception filter

> 將前面的名詞合併 Exception + filter
>
> 這邊的用途是全域例外攔截器，整個系統的例外都會被這邊攔截，並且進行處理

## 實作 Exception filter

### 建立目檔案

- 建立 all-exceptions.filter.ts

```text
src
└─user
│
└─app.controller.spec.ts
│
└─app.controller.ts
│
└─app.module.ts
│
└─all-exceptions.filter.ts
│
└─app.service.ts
│
└─main.ts
```

### 建立全域過濾器

> 在全域過濾器中，也自定義了例外拾回傳的格式

```ts
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: unknown, host: ArgumentsHost): void {
        // In certain situations `httpAdapter` might not be available in the
        // constructor method, thus we should resolve it here.
        const { httpAdapter } = this.httpAdapterHost;


        const ctx = host.switchToHttp();

        const msg = exception instanceof Error
            ? exception.message
            : 'unknown message';

        const httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const responseBody = {
            statusCode: httpStatus,
            msg: msg,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}
```

### 註冊全域的過濾器

- 於 app.module.ts 註冊

```ts {7-10}
@Module({
  imports: [
    InhabitantModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ],
})
export class AppModule { }
```
