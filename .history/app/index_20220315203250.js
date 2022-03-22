const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()


const userRouter = new Router({prefix: '/users'})
userRouter.post('/')

module.exports = app