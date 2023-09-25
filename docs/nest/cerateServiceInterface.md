---
sidebar_position: 40
description: 將 Service 抽象化
key: [NestJS, Node, TypeScript, 物件導向設計原則, Design Pattern]
tags: [NestJS, Node, TypeScript, 物件導向設計原則, Design Pattern]
---

# 👩‍💻 將 Service 抽象化

## 關於抽象化

- 會進行抽象化的幾個主要原因
  - 進行單元測試前，需要做資料隔離
  - 符合`介面隔離原則`讓模組之間的耦合度降低，確保後續的維護與修改可以更容易的進行
  - 符合`依賴反轉原則`讓其他呼叫者，依賴抽象，而不要依賴細節

> 通常開發過程會先定義`interface`，在實作細節

## Service 抽象化

- 目前專案結構

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
└─app.service.ts
│
└─main.ts
```

### 建立 interface

- 在 user 資料夾底下，建立一個 interfaces 的資料夾
- 並在裡面建立一個 user.service.interface.ts 的檔案

```text
user
└─dto
│ └─create-user.dto.ts
│ │
│ └─update-user.dto.ts
│ │
│ └─user.dto.ts
│ │
│ └─index.ts
│
└─interface
│ └─user.service.interface.ts
│
└─user.controller.ts
│
└─user.service.ts
│
└─user.module.ts
```

- 定義 user.service 所要開放的介面

```js
import { UpdateUserDto, CreateUserDto, UserDto } from '../dto';

export interface UserServiceInterface {
  /** 使用 store id 查出底下所有的使用者
   *
   * @param storeId store id
   * @returns user list
   */
  getUserByStoreId(storeId: string): Promise<Array<UserDto>>;

  /** 使用 user id 查詢使用者
   *
   * @param id user id
   * @returns user
   */
  getUserById(id: string): Promise<UserDto>;

  /** 新增使用者
   *
   * @param newUser new user
   * @param userId update user id
   * @returns new user list
   */
  createUser(newUser: CreateUserDto, userId: string): Promise<Array<UserDto>>;

  /**更新使用者
   *
   * @param id user id
   * @param oldUser edit user
   * @param userId update user id
   * @returns user list
   */
  updaterUser(
    id: string,
    oldUser: UpdateUserDto,
    userId: string,
  ): Promise<Array<UserDto>>;

  /**刪除使用者
   *
   * @param id user id
   * @returns user list
   */
  deleteUser(id: string): Promise<Array<UserDto>>;
}
```

### 繼承並實作介面

- 於 user.service.ts 繼承介面，並且實作細節

```text
user
└─dto
│ └─create-user.dto.ts
│ │
│ └─update-user.dto.ts
│ │
│ └─user.dto.ts
│ │
│ └─index.ts
│
└─interface
│ └─user.service.interface.ts
│
└─user.controller.ts
│
└─user.service.ts
│
└─user.module.ts
```

> `export class UserService implements UserServiceInterface`
>
> 使用implements來繼承介面並實作

```js
import { Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';

@Injectable()
export class UserService implements UserServiceInterface {
  /** 使用 store id 查出底下所有的使用者
   *
   * @param storeId store id
   * @returns user list
   */
  async getUserByStoreId(storeId: string): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: 'Big Pig',
      email: 'BigPig@local.com',
      phoneNumber: '0900000000',
      userName: 'pig pig',
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
    return users;
  }

  /** 使用 user id 查詢使用者
   *
   * @param id user id
   * @returns user
   */
  async getUserById(id: string): Promise<UserDto> {
    let user: UserDto = {
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    };

    return user;
  }
  /** 新增使用者
   *
   * @param newUser new user
   * @param userId update user id
   * @returns new user list
   */
  async createUser(
    newUser: CreateUserDto,
    userId: string,
  ): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: '591afd77-32d0-44c2-a487-b6bd8850a0fe',
      fullName: newUser.fullName,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      userName: newUser.userName,
    });

    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: 'Big Pig',
      email: 'BigPig@local.com',
      phoneNumber: '0900000000',
      userName: 'pig pig',
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
    return users;
  }

  /**更新使用者
   *
   * @param id user id
   * @param oldUser edit user
   * @param userId update user id
   * @returns user list
   */
  async updaterUser(
    id: string,
    oldUser: UpdateUserDto,
    userId: string,
  ): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: oldUser.fullName,
      email: oldUser.email,
      phoneNumber: oldUser.phoneNumber,
      userName: oldUser.fullName,
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
    return users;
  }

  /**刪除使用者
   *
   * @param id user id
   * @returns user list
   */
  async deleteUser(id: string): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
    return users;
  }
}
```

### 將服務註冊到 module

- 到 user.module.ts 註冊服務

```text
user
└─dto
│ └─create-user.dto.ts
│ │
│ └─update-user.dto.ts
│ │
│ └─user.dto.ts
│ │
│ └─index.ts
│
└─interface
│ └─user.service.interface.ts
│
└─user.controller.ts
│
└─user.service.ts
│
└─user.module.ts
```

```js
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface', // 注入時 tag 的標籤
      useClass: UserService, // 服務的實體
    },
  ],
})
export class UserModule {}
```

## 依賴反轉

### 在 Controller 依賴抽象

> 以下是修改前的程式碼， controller 是直接依賴 UserService 的實體

```js
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
```

> 修改後，會變成 controller 依賴的是 UserServiceInterface 這介面
>
> 在透過注入時，module 來告訴 controller 真正應該使用哪個實體

```js
@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}
}
```

---

### 完整 controller 程式碼

```js
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';
import { UserServiceInterface } from './interfaces/user.service.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}

  @Get(':storeId')
  async findAll(@Param('id') storeId: string): Promise<Array<UserDto>> {
    return await this.userService.getUserByStoreId(storeId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return await this.userService.getUserById(id);
  }

  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    return await this.userService.createUser(createCatDto, '');
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
    return await this.userService.updaterUser(id, updateCatDto, '');
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
```

---

Ref

[梁大哥 github](https://github.com/yuanyu90221/messenger_nestjs/tree/master/apps/auth)
