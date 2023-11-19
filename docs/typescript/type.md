---
sidebar_position: 15
description: TypeScript 基本型別
key: [Node, TypeScript]
tags: [Node, TypeScript]
---

# 🪿 TypeScript 基本型別

當你深入探討 "基本型別" 的章節時，可以包括以下基本型別的相關內容：

## 數字型別（number）

- 數字型別就像是年齡或商品的價格
- 可以是整數（25）或浮點數（99.95）

```typescript
let age: number = 25;
let price: number = 99.95;
```

## 字串型別（string）

- 字串型別就像是名字或一個問候語
- 是由文字所組成，可以包含字母、數字和符號

```typescript
let name: string = "John";
let greeting: string = "Hello, TypeScript!";
```

## 布林型別（boolean）

- 布林型別就像是一個開關，可以是打開（true）或關閉（false）
- 用來表示真假或某種狀態

```typescript
let isReady: boolean = true;
let isPaused: boolean = false;
```

## 陣列型別

- 陣列型別就像是一個列表，可以存儲一系列相同型別的元素
- 例如一組數字或一組水果

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
```

## 元組型別

- 元組型別就像是一個有序對，類似於姓名和年齡的組合
- 它允許不同型別的元素按順序排列

```typescript
let person: [string, number] = ["John", 25];
```

## 列舉型別

- 列舉型別就像是一套選項卡，例如顏色的選項卡（紅、綠、藍）
- 可以從預定的值中進行選擇

```typescript
enum Color {
  Red,
  Green,
  Blue
}

let myColor: Color = Color.Red;
```

## Null 與 Undefined

- Null 和 Undefined 就像是空盒子，分別表示缺少值或尚未定義的值

```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

## Any 型別

- Any 型別就像是一塊白板，可以容納任何內容，是最靈活的型別
- 要謹慎使用，因為它失去了 TypeScript 提供的靜態類型檢查的優勢

```typescript
let dynamicValue: any = "This can be any type.";
```
