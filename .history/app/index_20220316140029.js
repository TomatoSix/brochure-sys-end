const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
// const userRouter = require('../router/user.router')
// const authRouter = require('../router/auth.router')

const errorHandler = require('./error-handle')

const app = new Koa()

// 注册bodyParser,一定要加()
app.use(bodyParser())


// 注册路由
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
// 登录路由
// app.use(authRouter.routes())
// app.use(authRouter.allowedMethods())

app.on('error', errorHandler)

module.exports = app