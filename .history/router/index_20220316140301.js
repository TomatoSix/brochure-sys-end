const fs = require('fs')
const useRoutes = (app) => {
  // 读取当前问价所在的目录
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js')
  })
}