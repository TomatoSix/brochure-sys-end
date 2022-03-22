const dotenv = require('dotenv')
const fs = require('fs')

// 这个相对路径是相对于启动的文件夹下的
const PRIVATE_KEY = fs.readFileSync('src/app/keys/private.key');
const PUBLIC_KEY = fs.readFileSync('src/app/keys/public.key');
// 帮助.env文件加载到process.env中
dotenv.config()

// console.log(process.env.APP_PORT);
// 在process.env中取出APP_PORT并导出
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY
} = process.env