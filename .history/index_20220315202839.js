const app = require('./app')
const config = require('./app/config')


app.listen(config.APP_PORT, () => {
  console.log("8000端口, 服务器启动成功");
})