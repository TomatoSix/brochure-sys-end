const Router = require('koa-router')
const {
  create
} = require('../controller/user.controller')

const userRouter = new Router({prefix: '/users'})
// 创建注册接口
userRouter.post('/',verifyUser, create)

module.exports = userRouter