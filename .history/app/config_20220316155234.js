const dotenv = require('dotenv')
const fs = require('fs')

const PRIVATE_KEY = fs.readFileSync('../app/keys/private.key');
const PUBLIC_KEY = fs.readFileSync('../app/keys/public.key');
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
} = process.env