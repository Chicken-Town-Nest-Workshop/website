---
sidebar_position: 35
description: 建立一個新的模組
key: [NestJS, Node, TypeScript]
tags: [NestJS, Node, TypeScript]
---

# 👩‍💻 建立一個新的模組

## 目錄結構

### 新專案目錄結構

```text
src
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

### 建立資料夾

> 先建立一個 user 的資料夾

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

### 建立 Dto

> Dto 的全名為 `data transfer object`
>
> 定義資料傳輸時會使用的物件
>
> 注意: Dto != Entity
>
> 先定義一個使用者的 Dto
>
> 需將每個屬性加上 `@ApiProperty()` 這樣 swagger 才會顯示
>
> 並且可以針對 data 進行描述與限制

- 建立一個 dto 的目錄，並且建立一個 create-user.dto.ts 的檔案

```text
user
└─dto
  └─create-user.dto.ts
```

```js
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: '使用者全名',
  })
  fullName: string;

  @ApiProperty({
    description: 'user email',
  })
  email: string;

  @ApiProperty({
    description: 'user password',
  })
  password: string;

  @ApiProperty({
    description: '電話號碼',
  })
  phoneNumber: string;

  @ApiProperty({
    description: '使用者名稱',
  })
  userName: string;
}
```

- 建立一個 update-user.dto.ts 的檔案

```text
user
└─dto
  └─create-user.dto.ts
  │
  └─update-user.dto.ts
```

```js
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'user id',
  })
  id: string;

  @ApiProperty({
    description: '使用者全名',
  })
  fullName: string;

  @ApiProperty({
    description: 'user email',
  })
  email: string;

  @ApiProperty({
    description: '電話號碼',
  })
  phoneNumber: string;

  @ApiProperty({
    description: '使用者名稱',
  })
  userName: string;
}
```

- 建立一個 user.dto.ts

```text
user
└─dto
  └─create-user.dto.ts
  │
  └─update-user.dto.ts
  │
  └─user.dto.ts
  │
  └─index.ts
```

```js
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({
      description: 'user id',
    })
    id: string;
  
    @ApiProperty({
      description: '使用者全名',
    })
    fullName: string;
  
    @ApiProperty({
      description: 'user email',
    })
    email: string;
  
    @ApiProperty({
      description: '電話號碼',
    })
    phoneNumber: string;
  
    @ApiProperty({
      description: '使用者名稱',
    })
    userName: string;
  }
```

- 建立一個 index.ts 統一將 class 往上層拋

```text
user
└─dto
  └─create-user.dto.ts
  │
  └─update-user.dto.ts
  │
  └─user.dto.ts
  │
  └─index.ts
```

```js
export * from "./create-user.dto"
export * from "./update-user.dto"
export * from "./user.dto"
```

### 建立 Service

> 主要為商業邏輯層
>
> 所有的業務邏輯都應該集中在這一層

- 建立 user.service.ts

```text
user
└─dto
│ └─create-user.dto.ts
│ │
│ └─update-user.dto.ts
│ │
│ └─uer.dto.ts
│ │
│ └─index.ts
│
└─user.service.ts
```

```js
import { Injectable } from '@nestjs/common';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';

@Injectable()
export class UserService {
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
   * @returns new user list
   */
  async createUser(newUser: CreateUserDto): Promise<Array<UserDto>> {
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
   * @returns user list
   */
  async updaterUser(
    id: string,
    oldUser: UpdateUserDto,
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

### 建立 controller

> 這邊採用 `RESTful API` 風格
>
> 並且作了增刪查改的功能

- 在 user 資料夾底下建立 user.controller.ts 檔案

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
└─user.controller.ts
│
└─user.service.ts
```

- 服務注入

```js
 constructor(private readonly userService: UserService) {}
```

- 整體程式碼

```shell
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
    return await this.userService.createUser(createCatDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
    return await this.userService.updaterUser(id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
```

### 建置 module

> 主要來管理 controller, service 的生週期

- 建立 user.module.ts

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
  providers: [UserService],
})
export class UserModule {}
```

### 將 Module 註冊於 app

到 app.module.ts 加入 user.module.ts

```js {4,7}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
