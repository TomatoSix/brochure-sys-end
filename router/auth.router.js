const Router = require('koa-router')

const authRouter = new Router()

const {
  login
} = require('../controller/auth.controller')
const {
  verifyLogin
} = require('../middleware/auth.middleware.js')
// 创建登录接口
authRouter.post('/login',verifyLogin, login)

module.exports = authRouter