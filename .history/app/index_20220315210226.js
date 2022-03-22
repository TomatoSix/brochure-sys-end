const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const userRouter = require('../router/user.router')


const app = new Koa()


// 注册路由
app.use(bodyparser)
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app