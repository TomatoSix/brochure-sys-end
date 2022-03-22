const Koa = require('koa')
const userRouter = require('../router/user.router')


const app = new Koa()


// 注册路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app