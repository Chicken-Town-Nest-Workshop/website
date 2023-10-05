---
sidebar_position: 10
description: Entity Auto Load
key: [NestJS, Node, TypeScript, typeORM]
tags: [NestJS, Node, TypeScript, typeORM]
---

# 🐔 Entity Auto Load

## TypeORM 的 Entity

- TypeORM 有兩種模式
    1. 自動載入: TypeORM 會自動搜尋需要註冊的檔案
    2. 手動載入: 須由開發者決定應該要載入那些 Entity

## autoLoadEntities 設定

### app module import 設定

> 在 TypeORM 的 migration 設定中有一個屬性 `autoLoadEntities`，
>
> 這屬性決定是否要自動載入 Entity

```text {9}
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

```ts {17}
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
      type: 'postgres', //連線資料庫的類型
      url: configService.getOrThrow('DB_URI', ''),
      synchronize: false, //否自動同步 entity 到資料庫 table
      autoLoadEntities: true, //是否自動載入 Entity 到 forRoot TypeORM,
    };
  },
  inject: [ConfigService],
}),
```

### 自動載入

> 在自動載入模式下，需定義 `Entity` 檔案的命名規則，
>
> 在 `entities` 這屬性底下，指定 `Entity` 的檔案，
>
> 通常會將檔案定義成 `xxx.entity.ts`

```text {13}
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

```ts {16}
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

### 手動載入

> 在手動載入的模式下，開法者需要決定要載入那些 `Entity`

```text {13}
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

```ts {16}
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
  entities: [InhabitantEntity],
});
```

## 使用方式

> 如果要使用 Entity 需到該模組的 Module 去註冊

```text {5}
src
└─inhabitant
│└─inhabitant.entity.ts
││
│└─inhabitant.module.ts
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

```ts {2}
@Module({
  imports: [TypeOrmModule.forFeature([InhabitantEntity])],
  controllers: [InhabitantController],
  providers: [
    {
      provide: 'InhabitantServiceInterface',
      useClass: InhabitantService,
    },
    {
      provide: 'InhabitantRepositoryInterface',
      useClass: InhabitantRepository,
    },
  ],
})
export class InhabitantModule {}
```

---

## REF

[梁迪哥 教學](https://hackmd.io/@JgGTFI_BRjyUv6YuG1bmUQ/B1ZKISX_n/%2FFwXhSn6rTXG4BsAQCeiJyw#0-Nestjs-TypeORM-module-%E9%87%8D%E8%A6%81%E7%9A%84%E6%A6%82%E5%BF%B5)
