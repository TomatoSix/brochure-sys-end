const Router = require('koa-router')

const authRouter = new Router()

const {
  login
} = require('../controller/auth.controller')
// 创建登录接口
authRouter.post('/login', login)

module.exports = authRouter