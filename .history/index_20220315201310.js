const Koa = require('koa')

const app = new Koa()

app.listen(8000, () => {
  console.log("8000端口,服务器启动成功");
})