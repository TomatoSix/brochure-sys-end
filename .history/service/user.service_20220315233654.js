const connection = require('../app/database')

class UserService {
  async create(user) {
    console.log("用户信息保存到数据库中", user);
    const {name, password} = user
    const statement = `INSERT INTO users (name, password) VALUES (?, ?)`
    try {
      const result = await connection.execute(statement, [name, password])
      if (result.length) {
        return "创建用户成功"
      } 

    } catch(e) {
      console.log(e.sqlMessage, 'err');
      return `创建用户失败, ${e.sqlMessage}`
    }
    
  }
}

module.exports = new UserService()