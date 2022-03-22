const dotenv = require('dotenv')

// 帮助.env文件加载到process.env中
dotenv.config()

// console.log(process.env.APP_PORT);
// 在process.env中取出APP_PORT并导出
module.exports = {
  APP_PORT
} = process.env