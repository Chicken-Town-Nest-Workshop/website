---
sidebar_position: 45
description: 全域工具包 TimeZone
key: [NestJS, Node, TypeScript]
tags: [NestJS, Node, TypeScript]
---

# 🐔 全域工具包 TimeZone

## 關於全域工具包 TimeZone

> 為甚麼要特地提供一個 UUID 服務呢?

1. 為了做測試隔離
2. 會有好幾個模組需要使用到這個功能
3. 在雲端服務中，直接取 local time 會取到伺服器當地的時間，造成時間不準確的問題

## 製作全域工具包 TimeZone

- 先建立一個 clock 的資料夾

```text
src
└─user
│
└─uuid
│
└─clock
│
└─app.controller.spec.ts
│
└─app.controller.ts
│
└─app.module.ts
│
└─app.service.ts
│
└─main.ts
```

### 建立 interface

- 在 uuid 資料夾底下，建立一個 clock.service.interface.ts

```text
clock
└─clock.service.interface.ts
```

```js
export interface ClockServiceInterface{
    /**
     * 取得 +8 時間
     */
    getTime():string;
}
```

### 建立 service

- 此處可以使用 nest cli 來建立一個 service

```shell
nest generate service clock
```

```text
clock
└─clock.service.interface.ts
|
└─clock.service.ts
|
└─clock.service.spec.ts
```

> clock.service.spec.ts 是在進行測試使用的

```js
import { Injectable } from '@nestjs/common';
import { ClockServiceInterface } from './clock.service.interface';

@Injectable()
export class ClockService implements ClockServiceInterface {
  /**
   * 取得標準時間
   * @returns
   */
  private getTimeZone(): Date {
    const utcTime =
      new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
    return new Date(utcTime);
  }

  /**
   * 取得 +8 時間
   */
  getTime(): string {
    const offset = 8 * 60; // 8小時的分鐘數
    const utcTime = this.getTimeZone().getTime(); // 使用 getTimeZone() 取得標準時間
    const localTime = new Date(utcTime + offset * 60 * 1000);
    return localTime.toISOString();
  }
}
```

### 註冊模組

- 先使用 nest cli 建立一個 clock.module.ts

```shell
nest generate module clock
```

```text
clock
└─clock.service.interface.ts
|
└─clock.service.ts
|
└─clock.module.ts
|
└─clock.service.spec.ts
```

- 註冊 clock 服務
- 並且需要做 exports 來上匯出模組
- 使用 `@Global()` 來表示他是全域的模組

```js {4}
import { Global, Module } from '@nestjs/common';
import { ClockService } from './clock.service';

@Global()
@Module({
  providers: [
    {
      provide: 'ClockServiceInterface',
      useClass: ClockService,
    },
  ],
  exports: [
    {
      provide: 'ClockServiceInterface',
      useClass: ClockService,
    },
  ],
})
export class ClockModule {}
```

- 到 app.module.ts 底下註冊 UuidModule

```js {9}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UuidModule } from './uuid/uuid.module';
import { ClockModule } from './clock/clock.module';

@Module({
  imports: [UserModule, UuidModule, ClockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### 注意事項

:::caution
如果直接將 `Date` 物件，透過 controller 帶給客戶端，那麼客戶端拿到的會是`格林威治時間`，
所以必須將時間轉換成`ISO string`或是`time stamp`
:::
