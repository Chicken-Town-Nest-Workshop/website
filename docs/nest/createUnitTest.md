---
sidebar_position: 55
description: 單元測試實作
key: [NestJS, Node, TypeScript, Unit test]
tags: [NestJS, Node, TypeScript, Unit test]
---

# 🐔  單元測試實作

## 需求

1. 我需要一個檢查物件的服務
2. 如果物件是字串，就需要檢查它是否為空字串
3. 如果物件是數字，就要檢查它是不是 `NaN`
4. 如果有錯誤的話都要上拋例外

## 實作單元測試

```text
src
└─user
│
└─uuid
│
└─error-check
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

### 定義服務會提供的介面

- 建立一個 error-check.service.interface.ts
- 先想好要提供什麼要的 input 與 output

```text
error-check
└─error-check.service.interface.ts
```

```ts
export interface ErrorCheckServiceInterface {
  /**
   * 檢查字串是否為空
   * @param str
   */
  isNullOrEmpty(str: string): boolean;
  /**
   * 檢查資料是否為空
   * @param dataName 資料名稱
   * @param data 需要被檢查的資料
   */
  checkOneValue<T>(dataName: string, data: T): void;
}
```

### 建立服務檔案

- 建立服務與測試
  
```shell
nest generate service error-check
```

```text
error-check
└─error-check.service.interface.ts
|
└─error-check.service.ts
|
└─error-check.service.spec.ts
```

## 先寫測試

- 測試的檔案為 error-check.service.spec.ts
- 先做好測試的前置準備

```js
import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCheckService } from './error-check.service';

describe('ErrorCheckService', () => {
  let errorCheckService: ErrorCheckService;

  beforeEach(async () => {
    
    // 在容器中註冊我要做測試的服務
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorCheckService],
    }).compile();

    // 從容器中取出我要測試的服務
    errorCheckService = module.get<ErrorCheckService>(ErrorCheckService);
  });

});
```

### 需求1: 如果物件是字串，就需要檢查它是否為空字串

> 這邊測試兩個劇情
>
>> 劇情1: 資料為空的話，我應該會收到一個例外
>>
>> 劇情2: 資料是正常的字串，應該要正常運作

```js
  it('should throw an error when given an empty string', () => {
    expect(() => errorCheckService.checkOneValue('data', '')).toThrowError('data,資料不能為空或未定義');
  });

  it('should not throw an error when given a valid string', () => {
    // 應該不會拋出錯誤
    expect(() => errorCheckService.checkOneValue('data', 'valid')).not.toThrow();
  });
```

### 需求2: 如果物件是數字，就要檢查它是不是 `NaN`

> 這邊測試兩個劇情
>
>> 劇情1: 資料為 `NaN` 的話，我應該會收到一個例外
>>
>> 劇情2: 資料是正常的數字，應該要正常運作

```js
  it('should throw an error when given NaN', () => {
    expect(() => errorCheckService.checkOneValue('data', NaN)).toThrowError('data,資料不能為 NaN');
  });

  it('should not throw an error when given a valid number', () => {
    // 應該不會拋出錯誤
    expect(() => errorCheckService.checkOneValue('data', 42)).not.toThrow();
  });
```

### 需求3: 如果有錯誤的話都要上拋例外

> 這邊測試兩個劇情
>
>> 劇情1: 如果資料是 `undefined`，就要跳出 `data,資料未定義` 的例外
>>
>> 劇情2: 如果資料是沒有要檢查的型別，就要跳出 `不支援的資料型別` 的例外

```js
  it('should throw an error when given undefined data', () => {
    expect(() => errorCheckService.checkOneValue('data', undefined)).toThrowError('data,資料未定義');
  });

  it('should throw an error for unsupported data type', () => {
    expect(() => errorCheckService.checkOneValue('data', {})).toThrowError('不支援的資料型別');
  });
```

### 完整的測試程式碼

```js
import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCheckService } from './error-check.service';

describe('ErrorCheckService', () => {
  let errorCheckService: ErrorCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorCheckService],
    }).compile();

    errorCheckService = module.get<ErrorCheckService>(ErrorCheckService);
  });

  it('should throw an error when given an empty string', () => {
    expect(() => errorCheckService.checkOneValue('data', '')).toThrowError('data,資料不能為空或未定義');
  });

  it('should throw an error when given undefined data', () => {
    expect(() => errorCheckService.checkOneValue('data', undefined)).toThrowError('data,資料未定義');
  });

  it('should throw an error when given NaN', () => {
    expect(() => errorCheckService.checkOneValue('data', NaN)).toThrowError('data,資料不能為 NaN');
  });

  it('should throw an error for unsupported data type', () => {
    expect(() => errorCheckService.checkOneValue('data', {})).toThrowError('不支援的資料型別');
  });

  it('should not throw an error when given a valid string', () => {
    // 應該不會拋出錯誤
    expect(() => errorCheckService.checkOneValue('data', 'valid')).not.toThrow();
  });

  it('should not throw an error when given a valid number', () => {
    // 應該不會拋出錯誤
    expect(() => errorCheckService.checkOneValue('data', 42)).not.toThrow();
  });
});
```

## 開始寫服務

### error-check.service.ts

```ts
import { Injectable } from '@nestjs/common';
import { ErrorCheckServiceInterface } from './error-check.service.interface';

@Injectable()
export class ErrorCheckService implements ErrorCheckServiceInterface {
  /**
   * 檢查字串是否為空
   * @param str
   */
  isNullOrEmpty(str: string): boolean {
    return !str || str == undefined || str == '' || str.length == 0;
  }

  /**
   * 檢查資料是否為空
   * @param dataName 資料名稱
   * @param data 需要被檢查的資料
   */
  checkOneValue<T>(dataName: string, data: T): void {
    switch (typeof data) {
      case 'string':
        if (this.isNullOrEmpty(data))
          throw new Error(`${dataName},資料不能為空或未定義`);
        break;
      case 'number':
        if (isNaN(data)) throw new Error(`${dataName},資料不能為 NaN`);
        break;
      case 'undefined':
        throw new Error(`${dataName},資料未定義`);
      default:
        throw new Error('不支援的資料型別');
    }
  }
}
```

### 註冊服務

- 先建立一個 module

```shell
nest generate module error-check
```

```ts
import { Global, Module } from '@nestjs/common';
import { ErrorCheckService } from './error-check.service';

@Global()
@Module({
  providers: [
    {
      provide: 'ErrorCheckServiceInterface',
      useClass: ErrorCheckService,
    },
  ],
  exports: [
    {
      provide: 'ErrorCheckServiceInterface',
      useClass: ErrorCheckService,
    },
  ],
})
export class ErrorCheckModule {}
```

- app.module.ts

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UuidModule } from './uuid/uuid.module';
import { ClockModule } from './clock/clock.module';
import { ErrorCheckModule } from './error-check/error-check.module';

@Module({
  imports: [UserModule, UuidModule, ClockModule, ErrorCheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## 進行測試

### 測試指令

- 進行所有測試

```shell
pnpm test
```

- 針對某個測試執行

```shell
pnpm test:watch  src/error-check/error-check.service.spec.ts
```

- 測試過程中可以下中斷點 debug

```shell
pnpm test:debug
```

### 執行

- 這邊執行

```shell
pnpm test:watch  src/error-check/error-check.service.spec.ts
```

### 測試結果

```shell
 PASS  src/error-check/error-check.service.spec.ts                                                                                                               
  ErrorCheckService
    √ should throw an error when given an empty string (35 ms)
    √ should throw an error when given undefined data (5 ms)                                                                                                     
    √ should throw an error when given NaN (3 ms)                                                                                                                
    √ should throw an error for unsupported data type (4 ms)                                                                                                     
    √ should not throw an error when given a valid string (5 ms)                                                                                                 
    √ should not throw an error when given a valid number (3 ms)                                                                                                 
                                                                                                                                                                 
Waiting for the debugger to disconnect...                                                                                                                        
Waiting for the debugger to disconnect...                                                                                                                        
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...                                                                                                                        
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        6.617 s
```

> 可以看到測試後的數據與結果
