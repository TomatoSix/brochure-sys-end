# 此项目为前端小册知识服务平台

# 项目搭建

1. npm init -y
   初始化项目
   生成 package.json 文件

2. 安装 koa
   npm install koa

3. 安装 nodemon
   npm install nodemon --save-dev

4. npm run start 设置

```
"start": "nodemon ./src/main.js"
```

5. dotenv 安装以及 config.js 设置
   帮助加载.env 文件，直接加载到 process.env 中

   npm install dotenv

6. koa-router 安装以及路由注册
   npm install koa-router

7. koa-bodyparser 安装-用于解析 json 数据
   npm install koa-bodyparser

8. mysql2 安装-用于连接数据库
   1. npm install mysql2
   2. 创建 database.js 文件
9. 密码加密, 使用 crypto(nodejs 自带)

10. jsonwebtoken 安装
    npm install jsonwebtoken

# 项目文件说明

main.js 项目文件入口
app 对整个项目的操作
-- config.js 整个文件的配置
-- database.js 数据库连接相关操作
-- error-handle.js 错误状态码
-- index.js Koa 相关操作
constants 常量设置
router 路由及接口设置
middleware 中间件
controller 控制器, 与数据库连接最近的一步操作
service 数据库相关操作
utils 工具文件夹
.env 环境变量的配置
