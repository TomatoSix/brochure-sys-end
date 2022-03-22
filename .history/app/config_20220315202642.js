const dotenv = require('dotenv')

// 帮助.env文件加载到process.env中
dotenv.config()
const { APP_PORT} = process.env

// console.log(process.env.APP_PORT);