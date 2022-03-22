const Router = require('koa-router')

const userRouter = new Router()
// 创建注册接口
userRouter.post('/login',verifyUser ,handlePassword, create)

module.exports = userRouter