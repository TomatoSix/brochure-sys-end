const Router = require('koa-router')

const userRouter = new Router({prefix: '/auth'})
// 创建注册接口
userRouter.post('/register',verifyUser ,handlePassword, create)

module.exports = userRouter