const Koa = require('koa')

const app = new Koa()

const Router = require('koa-router')

const userRouter = new Router({prefix: '/users'})


module.exports = app