const app = require('./app')
const config = require('./app/config')


app.listen(8000, () => {
  console.log("8000端口, 服务器启动成功");
})