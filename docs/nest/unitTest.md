---
sidebar_position: 50
description: 理解 Nest 的單元測試
key: [NestJS, Node, TypeScript, Unit test]
tags: [NestJS, Node, TypeScript, Unit test]
---

# 🐔 理解 Nest 的單元測試

## 關於單元測試

> 在 Nest js 中，預設的測試框架為 [Jest](https://github.com/jestjs/jest)
>
> 其中提供了 `斷言`、`mock` 等等測試功能

## 從官網範例理解測試生命週期

### 範例程式

```js
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
```

### 生命週期-import

> `CatsController` 和 `CatsService` 的匯入：程式碼開頭匯入是被測試的控制器和服務

```js
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
```

### 生命週期-describe for class

> `describe`：這是 Jest 測試框架中的函式，用來定義一個測試套件，這個套件專門用來測試 `CatsController` 類別

```js
describe('CatsController', () => {

});
```

### 生命週期-beforeEach

> `beforeEach`：在每個測試案例執行之前，beforeEach 函式會被執行
>
> 在這個區塊中，我們建立了一個新的 `CatsService` 實例，並注入到一個新的 `CatsController` 實例中

```js
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });
```

### 生命週期-describe for function

> describe('findAll', ...)：用它來定義我要測試的函式

```js
  describe('findAll', () => {
    
  });
```

### 生命週期-it

> `it`：他的單位為一個測試案例(test case)

```js
it('should return an array of cats', async () => {

});
```

### 生命週期-jest.spyOn

> `jest.spyOn`：這是一個 `mock`，用來做假物件，離掉真實物件的相依性(只專注在該內部邏輯，外部都做隔離)
>
> 在這邊預設，`catsService` 的 `findAll` 會回傳 `['test']`

```js
const result = ['test'];
jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
```

### 生命週期-expect

> `expect`：這是斷言語句，它驗證呼叫 catsController.findAll() 方法的結果是否等於我們預期的 result

```js
const result = ['test'];
jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

expect(await catsController.findAll()).toBe(result);
```

> 經過以上步驟就完成一個單元測試的程式

## 名詞回顧

| 名詞 | NUnit 名詞對照 | 說明 |
|--- | --- | --- |
| describe (for class) | TestFixture  | 標示為測試類別 |
| beforeEach | SetUp | 標示為初始化 |
| describe (for function) | Test or TestCase | 標示測試的函式 |
| it | Test or TestCase | 測試案例 |
| jest.spyOn | NSubstitute.Substitute | mock，用來做假物件，離掉真實物件的相依性 |
| expect | Assert | 斷言 |

---

ref

梁大哥解說
