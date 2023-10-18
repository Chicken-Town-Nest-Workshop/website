---
slug: date time 踩雷小故事
title: date time 踩雷小故事
authors: [chicken]
key: [小雞鎮, Nest js]
tags: [小雞鎮新聞, 技術新聞]
---

![封面](./clock.png)

> 在開發時間模組的過程中，踩雷啦!

<!-- truncate -->

## 踩雷經過

各位鎮民們，事情是這樣子的，為了給大家有良好的守時觀念，所以小鎮決定先做好時間模組，但是在時間模組開發的過程中呢，踩到了一個地雷。

- 最一開始在 controller 回傳了 `Date` 物件
- 但在 `swagger` 上顯示越看越不對勁，發現它顯示的是格林威治時間

```ts
  @Get()
  getTownDateTime(): Date {
    const date = this.clockService.getDateTime();
    return date;
  }
```

- 在副鎮長的協助下終於得到幾個結論
  1. 直接回傳 `Date` 的話，會被當成一個新的物件
  2. 回傳前須要將她轉為字串或數字
  3. 字串: 使用的是 `ISO string`
  4. 數字: 使用的是 `unix time`
- 最終小雞鎮在這邊選擇了 `ISO string`

```ts
    /**
     * 取得 +8 時間
     */
    getDateTime(): string {
        const offset = 8 * 60; // 8小時的分鐘數
        const utcTime = this.getTimeZone().getTime(); // 使用 getTimeZone() 取得標準時間
        const localTime = new Date(utcTime + offset * 60 * 1000);
        return localTime.toISOString();
    }
```

## 小雞鎮在這邊預祝大家中秋節快樂

[小雞鎮時間模組上線嚕](https://github.com/Chicken-Town-Nest-Workshop/clock-nest)
