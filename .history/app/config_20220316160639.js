const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

// 帮助.env文件加载到process.env中
dotenv.config()
// 这个相对路径是相对于启动的文件夹下的
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));
// console.log(process.env.APP_PORT);
// 在process.env中取出APP_PORT并导出
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env

// 新增这两个属性
module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;