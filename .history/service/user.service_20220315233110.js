const connection = require('../app/database')

class UserService {
  async create(user) {
    console.log("用户信息保存到数据库中", user);
    const {name, password} = user
    const statement = `INSERT INTO user (name, password) VALUES (?, ?)`

    const result = await connection.execute(statement, [name, password])
    return result
  }
}

module.exports = new UserService()