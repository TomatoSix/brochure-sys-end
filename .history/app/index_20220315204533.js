const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const userRouter = new Router({prefix: '/users'})
userRouter.post('/register', (ctx, next) => {
  ctx.body = "创建用户成功"
})

// 注册路由
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app