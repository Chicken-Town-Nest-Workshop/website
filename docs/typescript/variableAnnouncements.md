---
sidebar_position: 10
description: TypeScript 基礎語法
key: [Node, TypeScript]
tags: [Node, TypeScript]
---

# 🪿 TypeScript 變數宣告

## 變數宣告

> 在 TypeScript 中，變數宣告是定義一個可以存儲數據的地方
>
> 我們必須告訴電腦，說我們有那些變數要被使用

### 使用 `let` 關鍵字

- 就像放一個空的籃子，然後指定只能放數字進去

```typescript
let num: number; // 宣告一個名為 num 的變數，並指定其類型為數字
```

### 指定變數值

- 這邊就像是放一個籃子，並且給他 10 個蘋果一樣

```typescript
let num: number = 10; // 宣告一個名為 num 的變數，並賦值為 10
```

### 可變變數 (Mutable) vs 不可變變數 (Immutable)

- 可變變數: 就跟鉛筆一樣，寫了之後還可以用橡皮擦擦掉重寫
- 不可變變數: 就跟奇異筆一樣，塗黑之後就沒辦法修改

```typescript
let mutableVariable: string = "可變變數"; // 可變變數，可以重新賦值
const immutableVariable: string = "不可變變數"; // 不可變變數，一旦賦值後不能再更改
```

### 變數宣告的類型推斷

- TypeScript 具有類型推斷功能，可以根據賦值來自動推斷變數的類型

```typescript
let autoTypeInferred = "這是一個字串"; // TypeScript 會自動將變數設為字串型別
```

### 使用 `var` 關鍵字 (不推薦)

- 在 TypeScript 中，使用 `var` 關鍵字宣告變數是合法的，它具有全域作用域而不是區塊作用域

```typescript
var legacyVariable = "使用 var 宣告的變數"; // 不推薦使用 var
```

### `const`、`let`、和 `var` 比較

|  關鍵字 | 可重複宣告 | 區塊作用域 | 初始值可選 | 提升（Hoisting） | 推薦用途 |
|-------|------------|----------|-----------|-----------------|----------|
| `const` | ❌          | ✔        | ✔         | ❌              | 常數值    |
| `let`   | ✔          | ✔        | ❌         | ❌              | 可變變數  |
| `var`   | ✔          | ✖        | ❌         | ✔              | 不推薦使用 |

- **可重複宣告：** 表示是否允許在同一範疇內重複宣告變數
- **區塊作用域：** 表示變數的作用範圍是否僅限於當前區塊
- **初始值可選：** 表示在宣告變數時是否需要賦予初始值
- **提升（Hoisting）：** 表示是否存在變數提升現象，即變數可以在宣告之前被使用
