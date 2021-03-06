const connection = require("../app/database");

class UserService {
  /**
   * @desc 创建用户
   * @date 2022-03-15
   * @param {any} user, name:账号, password:密码
   * @returns {any}
   */
  async create(user) {
    console.log("用户信息保存到数据库中", user);
    const { name, password } = user;
    const statement = `INSERT INTO users (name, password) VALUES (?, ?)`;
    const result = await connection.execute(statement, [name, password]);
    return result;
  }

  /**
   * @desc 检测用户名是否存在
   * @date 2022-03-16
   * @param {any} name
   * @returns {any}
   */
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`;

    const result = await connection.execute(statement, [name]);
    return result[0];
  }

  /**
   * @desc 根据用户信息获取用户ID
   * @date 2022-03-16
   * @param {any} name
   * @returns {any}
   */
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`;

    const result = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new UserService();
