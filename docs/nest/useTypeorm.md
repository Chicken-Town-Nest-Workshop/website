---
sidebar_position: 65
description: 使用 TypeORM
key: [NestJS, Node, TypeScript, typeORM]
tags: [NestJS, Node, TypeScript, typeORM]
---

# 🐔 使用 TypeORM

## 關於

> TypeORM: 支援 Typescript 型別宣告的 Nodejs ORM 框架

### DataSource

> 是一個用來管理與資料庫連線的重要元件，在應用程式啟動時建立連線池，在關閉應用程式時關閉連線池
>
> 在 Nestjs 應用程式中，這些工作都可以由元件管理器自動處理，無需手動設定

### Migration

> Migration 預設如果 synchronized 設定成 true，就會自動更新資料表為當下 Entity 格式，適合用來做資料庫遷移

## 使用 TypeORM

### 安裝套件

```shell
pnpm add @nestjs/config
pnpm add @nestjs/typeorm typeorm pg
pnpm add joi
pnpm add dotenv
```

### 設定資料庫連線

- 先 import 需要的依賴

```ts
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
```

- 於 app.module.ts 設定連線

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_URI: Joi.string().required(),
        IS_DB_SSL_MODE: Joi.boolean().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory(configService: ConfigService) {
        const IS_DB_SSL_MODE = configService.getOrThrow<boolean>(
          'IS_DB_SSL_MODE',
          false,
        );
        return {
          ssl: IS_DB_SSL_MODE, // 是否要使用 ssl 連線，一般正式連線會啟用
          extra: {
            ssl: IS_DB_SSL_MODE ? { rejectUnauthorized: false } : null,
            poolSize: 5,
            idleTimeoutMillis: 3600000,
          },
          type: 'postgres',//連線資料庫的類型
          url: configService.getOrThrow('DB_URI', ''),
          synchronize: false,//否自動同步 entity 到資料庫 table
          autoLoadEntity: true//是否自動載入 Entity 到 forRoot TypeORM
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
```

### 加入 Entity

- 於 inhabitant 目錄底下，建立一個檔案為 inhabitant.entity.ts

```text
src
└─inhabitant
│└─inhabitant.entity.ts
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

```ts
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';


@Entity('inhabitant', { schema: 'public' })
export class InhabitantEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'idCard', type: 'nvarchar', length: 128 })
    idCard: string;

    @Column({ name: 'name', type: 'nvarchar', length: 20 })
    name: string;

    @Column({ name: 'hungry', type: 'int' })
    hungry: number;

    @Column({ name: 'occupation', type: 'nvarchar', length: 10 })
    occupation: string;

    @Column({ name: 'age', type: 'int' })
    age: number;

    @Column({ name: 'money', type: 'int' })
    money: number;

    @Column({ name: 'ban', type: 'boolean' })
    ban: boolean;

    @CreateDateColumn({ name: 'create_time', type: 'datetime' })
    create_time: Date;

    @UpdateDateColumn({ name: 'update_time', type: 'timestamp without time zone' })
    update_time: Date;

    @Column({ name: 'update_user_id', type: 'nvarchar', length: 128 })
    update_user_id: string;
}
```

- 註冊 Entity

```shell
nest generate module inhabitant
```

### 設定資料庫轉移

- 新增 typeorm.migration.ts

```text
src
└─inhabitant
│└─inhabitant.entity.ts
│
└─app.controller.spec.ts
│
└─app.controller.ts
│
└─app.module.ts
│
└─app.service.ts
│
└─typeorm.migration.ts
│
└─main.ts
```

```ts
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();
const configService = new ConfigService();
const IS_DB_SSL_MODE = configService.getOrThrow<boolean>(
    'IS_DB_SSL_MODE',
    false,
);
export default new DataSource({
    type: 'postgres',
    url: configService.get<string>('DB_URI', ''),
    ssl: IS_DB_SSL_MODE,
    extra: {
        ssl: IS_DB_SSL_MODE ? { rejectUnauthorized: false } : null,
    },
    migrations: ['src/migrations/*.ts'],
    migrationsRun: true,
    entities: ['**/*.entity.ts'],
});
```

- 新增 .env

```text
src
└─inhabitant
│└─inhabitant.entity.ts
│
└─app.controller.spec.ts
│
└─app.controller.ts
│
└─app.module.ts
│
└─app.service.ts
│
└─typeorm.migration.ts
│
└─.env
│
└─main.ts
```

```js
DB_URI=postgresql://${db_username}:${db_password}@${db_hostname}:${db_port}/${db_name}
```

### 新增 script

- 於 package.js 新增 script

```js
"typeorm": "ts-node ./node_modules/typeorm/cli",
"schema:sync": "pnpm run typeorm schema:sync -d src/typeorm.migration.ts",
"schema:drop": "pnpm run typeorm schema:drop -d src/typeorm.migration.ts",
"schema:log": "pnpm run typeorm schema:log -d src/typeorm.migration.ts",
"typeorm:show": "pnpm run typeorm migration:show -d src/typeorm.migration.ts",
"typeorm:run-migrations": "pnpm run typeorm -- migration:run -d src/typeorm.migration.ts",
"typeorm:create-migration": "npm run typeorm -- migration:create src/migrations/$npm_config_name",
"typeorm:generate-migration": "npm run typeorm -- migration:generate -d src/typeorm.migration.ts src/migrations/$npm_config_name",
"typeorm:revert-migration": "pnpm run typeorm migration:revert -d src/typeorm.migration.ts"
```

> 在 windows 底下

```js
"typeorm:create-migration": "npm run typeorm -- migration:create src/migrations/$npm_config_name",
```

需換成

```js
"typeorm:create-migration": "npm run typeorm -- migration:create src/migrations/%npm_config_name%",
```

### 新增 migration

```shell
npm run typeorm:create-migration --name=INHABITANT
```

```ts
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class INHABITANT1695957121944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "inhabitant",
            schema: "public",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "idCard",
                    type: "nvarchar",
                    length: "128",
                },
                {
                    name: "name",
                    type: "nvarchar",
                    length: "20",
                },
                {
                    name: "hungry",
                    type: "int",
                },
                {
                    name: "occupation",
                    type: "nvarchar",
                    length: "10",
                },
                {
                    name: "age",
                    type: "int",
                },
                {
                    name: "money",
                    type: "int",
                },
                {
                    name: "ban",
                    type: "boolean",
                },
                {
                    name: "create_time",
                    type: "datetime",
                },
                {
                    name: "update_time",
                    type: "timestamp without time zone",
                },
                {
                    name: "update_user_id",
                    type: "nvarchar",
                    length: "128",
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("inhabitant", true, true, true);
    }

}
```

### 新增 schema

```shell
pnpm run typeorm:run-migrations
```

> 此時就能看到資料庫長出表格了
