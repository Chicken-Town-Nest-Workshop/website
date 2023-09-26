---
sidebar_position: 10
description: 小雞鎮居民模組
key: [NestJS, 居民]
tags: [居民, 模組]
---

# 🐤 居民模組

## 說明

> 居民模組會提供，新住民的註冊

## 資料表

- inhabitant

| 欄位 | 型態   |  說明 |
| --- | --- | --- |
| id         | nvarchar(128)   |  居民的生分證    |
| name       | nvarchar(20)    |  居民的姓名      |
| hungry     | int             |  等級為 0 ~ 10   |
| occupation | nvarchar(10)    |  需要到職業工會選擇  |
| age        | int             |  年齡 居民入住時都會從 0 歲算起 |
| money      | int             |  目前手邊的現金|
| ban        | boolean         |  驅除出境或是死掉的居民就會被座標住 |
| create_time        | dateTime |  入住時間   |
| update_time        | dateTime |  資料改動時間   |
| update_user_id        | nvarchar(128) |  資料異動人   |

## 服務

> 由鎮長或相關人士來辦理居民的入鎮登記
