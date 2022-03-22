const fs = require('fs')

// 注册router文件下的所有路由
const useRoutes = (app) => {
  // 读取当前问价所在的目录
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = useRoutes