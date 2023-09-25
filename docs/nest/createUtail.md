---
sidebar_position: 45
description: 全域工具包 UUID
key: [NestJS, Node, TypeScript]
tags: [NestJS, Node, TypeScript]
---

# 🐔 全域工具包 UUID

## 關於全域工具包 UUID

> 為甚麼要特地提供一個 UUID 服務呢?

1. 為了做測試隔離
2. 會有好幾個模組需要使用到這個功能

## 製作全域工具包 UUID

- 先建立一個 uuid 的資料夾

```text
src
└─user
│
└─uuid
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

- 在 uuid 資料夾底下，建立一個 uuid.service.interface.ts

```text
uuid
└─uuid.service.interface.ts
```

```js
export interface UUIDServiceInterface {
  /**
   * 回傳 uuid
   */
  getUUID(): string;
}
```

### 建立 service

- 此處可以使用 nest cli 來建立一個 service

```shell
nest generate service uuid
```

```text
uuid
└─uuid.service.interface.ts
|
└─uuid.service.ts
|
└─uuid.service.spec.ts
```

> uuid.service.spec.ts 是在進行測試使用的

```js
import { Injectable } from '@nestjs/common';
import { UUIDServiceInterface } from './uuid.service.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UUIDService implements UUIDServiceInterface {
    /**
     * 取得 uuid
     */
   async getUUID(): Promise<string> {
        const uuid = uuidv4(); 
        return uuid;
    }
}
```

### 註冊模組

- 先使用 nest cli 建立一個 uuid.module.ts

```shell
nest generate module uuid
```

```text
uuid
└─uuid.service.interface.ts
|
└─uuid.service.ts
|
└─uuid.module.ts
|
└─uuid.service.spec.ts
```

- 註冊 uuid 服務
- 並且需要做 exports 來上匯出模組
- 使用 `@Global()` 來表示他是全域的模組

```js {4}
import { Module ,Global } from '@nestjs/common';
import { UUIDService } from './uuid.service';

@Global()
@Module({
  providers: [
    {
      provide: 'UUIDServiceInterface',
      useClass: UUIDService,
    },
  ],
  exports: [
    {
      provide: 'UUIDServiceInterface',
      useClass: UUIDService,
    },
  ],
})
export class UuidModule {}
```

- 到 app.module.ts 底下註冊 UuidModule

```js {8}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UuidModule } from './uuid/uuid.module';

@Module({
  imports: [UserModule, UuidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

ref

[梁大哥 github](https://github.com/yuanyu90221/ordering-app/tree/master/apps/auth/src/bcrypt)
