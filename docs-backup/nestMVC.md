---
sidebar_position: 75
description: NestJS MVC
key: [NestJS, Node, TypeScript]
tags: [NestJS, Node, TypeScript]
---

# 🐔 NestJS MVC

## 關於 NestJS MVC

> MVC 的 全名是 Model-View-Controller，

## 實作  NestJS MVC

### 安裝依賴

[模板引擎](https://expressjs.com/en/guide/using-template-engines.html)

```shell
pnpm add hbs
```

### 主程式

```ts
 const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

```ts
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
```

### controller

```ts
import { Post, Controller, Body, Get, Render, Inject } from '@nestjs/common';
import { LoginCode, LoginDto, LoginStatusDto } from './dtos';
import { LoginServiceInterface } from './interfaces/login.service.interface';

@Controller('login')
export class LoginController {

    constructor(
        @Inject('LoginServiceInterface')
        private loginService: LoginServiceInterface
    ) { }

    @Get()
    @Render('index')
    root() {
        return;
    }
}
```

### hbs

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>登入</title>
    <style>
        body {
            background-color: #4f4f4f;
            text-align: center;
            font-family: Arial, sans-serif;
        }

        .login-container {
            background-color: #d14a8e;
            border-radius: 10px;
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            margin-top: 100px;
        }

        h1 {
            color: #fff;
        }

        label {
            display: block;
            margin-bottom: 10px;
            color: #fff;
        }

        #error-message {
            color: rgb(243, 213, 213);
        }

        input[type="text"],
        input[type="password"] {
            width: 80%;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid #ff0c86;
        }

        input[type="submit"] {
            width: 80%;
            font-size: large;
            background-color: #ff6af3;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="login-container">
        <h1>🐔 歡迎來到小雞鎮</h1>
        <form action="#" method="post" onsubmit="event.preventDefault(); submitLogin();">
            <label for="username">帳號:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">密碼:</label>
            <input type="password" id="password" name="password" required>
            <input type="submit" value="登入">
        </form>
        <p id="error-message"></p>
    </div>
    <script>
        const submitLogin = () => {
            displayErrorMessage("");
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const data = {
                username: username,
                password: password
            };

            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    console.log(response);
                    if (response.ok) {
                        return response.json();
                    } else {
                        displayErrorMessage("登入失敗");
                        throw new Error("登入失敗");
                    }
                })
                .then(result => {
                    console.log(result);
                    if (result.code === '00000') {
                    } else if (result.code === '99999') {
                        displayErrorMessage(result.msg);
                        console.error("登入失敗 : " + result.msg);
                        throw new Error("登入失敗");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }

        const displayErrorMessage = (message) => {
            const errorMessageElement = document.getElementById("error-message");
            errorMessageElement.textContent = message;
        }
    </script>
</body>

</html>
```
