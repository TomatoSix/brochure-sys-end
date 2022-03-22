const mysql = require('mysql2')
const Connection = require('mysql2/typings/mysql/lib/Connection')

const config = require('./config')

// 创建连接池
mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

connection.getConnetion((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("数据库连接失败");
    } else {
      console.log("数据库连接成功");
    }
  })
})