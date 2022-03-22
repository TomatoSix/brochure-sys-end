const mysql = require('mysql2')

const config = require('./config')

MYSQL_HOST=localhost 
MYSQL_PORT=3306
MYSQL_DATABASE=brochure
MYSQL_USER=root
MYSQL_PASSWORD=123456
mysql.createPoolCluster({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})