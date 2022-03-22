const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router')


const app = new Koa()

// 注册bodyParser
app.use(bodyParser)
// 注册路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app