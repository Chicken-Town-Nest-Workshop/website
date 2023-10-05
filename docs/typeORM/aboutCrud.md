---
sidebar_position: 15
description: TypeORM 的 CRUD
key: [NestJS, Node, TypeScript, typeORM]
tags: [NestJS, Node, TypeScript, typeORM]
---

# 🐔 TypeORM 的 CRUD

## 關於 CRUD

> 在整個 TypeORM 最核心的觀念就是 CRUD
>
> CRUD 則是一個縮寫，代表了以下四個基本操作：

1. Create (新增)：在資料庫中新增記錄或資料
2. Read (讀取)：從資料庫中讀取或搜尋記錄或資料
3. Update (更新)：更新現有記錄或資料的內容
4. Delete (刪除)：從資料庫中刪除現有的記錄或資料

## CRUD 實作

### 準備

- 注入 `Repository` 與 `DataSource`

```ts
constructor(
  private readonly dataSource: DataSource,
  @InjectRepository(InhabitantEntity)
  private readonly inhabitantDao: Repository<InhabitantEntity>,
) {}
```

- 定義 `table name` 與 `schema`
- 因為在 CRUD 的過程都會用到這些，所以將他抽離出來做成私有變數，保持一致性

```ts
  private readonly _tableName: string = 'inhabitant';
  private readonly _schema: string[] = [
    'id',
    'name',
    'hungry',
    'occupation',
    'age',
    'money',
    'ban',
    'create_time',
    'update_time',
    'update_user_id',
  ];
```

### Read

> 搜尋分為兩種，一種是搜尋整張 `table` 的資料
>
> 一種是有條件的查詢
>
> 並且在查詢功能上都是使用 `Repository<InhabitantEntity>` 的物件

- 搜尋全部
- 使用 `find` 查出來後會是一個 `Array<InhabitantEntity>`

```ts
 async readAll(): Promise<InhabitantDto[]> {
    const result = await this.inhabitantDao.find();

    return result.map((data) => ({
      id: data.id,
      name: data.name,
      age: data.age,
      occupation: data.occupation,
    }));
  }
```

- 代條件查詢
- 使用 `fineOne`
- 並且加入 `where` 語句

```ts
  async readById(id: string): Promise<InhabitantDto> {
    const result = await this.inhabitantDao.findOne({
      where: {
        id: id,
      },
    });

    return {
      id: result.id,
      name: result.name,
      age: result.age,
      occupation: result.occupation,
    };
  }
```

### Create

> 建立需要透過 `DataSource` 這個物件來執行

```ts
 async create(data: InhabitantEntity): Promise<InhabitantDto> {

    // 1. 先建立 dataSource 的物件
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    //2. 將資料寫入 db
    const result = await queryBuilder
      .insert() // 插入資料庫操作
      .into(InhabitantEntity) // 插入到 "InhabitantEntity" 資料表
      .values([data]) // 插入的資料（data）值
      .returning(this._schema) // 返回的資料模型或結構
      .updateEntity(true) // 更新實體（true表示執行更新操作）
      .execute(); // 執行操作並獲取結果

    const model = result.raw[0] as InhabitantEntity;

    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }
```

### Update

> 更新資料庫，分為兩種，一種是讓 ORM 自行去斷定是否要更新
>
> 另一種是指定這次要更新的欄位

- 讓 ORM 自行判斷

```ts
 async update(data: InhabitantEntity): Promise<InhabitantDto> {

    // 1. 先建立 dataSource 的物件
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    // 2. 將資料寫入 db（將資料更新到資料庫中）
    const result = await queryBuilder
      .update<InhabitantEntity>(InhabitantEntity, data) // 更新資料
      .where(this._tableName + '.id = :id', { id }) // 指定更新條件（根據 id）
      .returning(this._schema) // 返回的資料模型或結構
      .updateEntity(true) // 更新實體（true表示執行更新操作）
      .execute(); // 執行操作並獲取結果


    const model = result.raw[0] as InhabitantEntity;

    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }
```

- 指定更新欄位

```ts
  async update(
    data: UpdateInhabitantDto,
    updateId: string,
  ): Promise<InhabitantDto> {

    // 1. 先建立 dataSource 的物件
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    // 2. 將資料寫入 db（將資料更新到資料庫中）
    const result = await queryBuilder
      .update(this._tableName) // 指定要更新的資料表
      .set({
        name: data.name, // 設置新的名稱（使用 data.name）
        update_user_id: updateId, // 設置更新使用者的 ID（使用 updateId 變數）
      })
      .where(this._tableName + '.id = :id', { updateId }) // 指定更新條件
      .returning(this._schema) // 返回的資料模型或結構
      .updateEntity(true) // 更新實體（true表示執行更新操作）
      .execute(); // 執行操作並獲取結果


    const model = result.raw[0] as InhabitantEntity;
    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }
```

### Delete

> 永久刪除資料庫的整筆資料

```ts
 async deleteById(id: string): Promise<InhabitantDto> {

    // 1. 先建立 dataSource 的物件
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    // 2. 將資料寫入 db（將資料更新到資料庫中）
    const result = await queryBuilder
      .delete() // 刪除資料
      .where(this._tableName + '.id = :id', { updateId }) // 指定更新條件
      .returning(this._schema) // 返回的資料模型或結構
      .execute(); // 執行操作並獲取結果

    const model = result.raw[0] as InhabitantEntity;

    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }
```

---

## REF

[梁迪哥 教學](https://hackmd.io/@JgGTFI_BRjyUv6YuG1bmUQ/B1ZKISX_n/%2FFwXhSn6rTXG4BsAQCeiJyw#5-%E5%AF%A6%E4%BD%9C-%E5%9F%BA%E7%A4%8E%E6%93%8D%E4%BD%9C)
