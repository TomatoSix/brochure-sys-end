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
   * @desc 根据用户ID获取用户信息
   * @date 2022-03-16
   * @param {any} name
   * @returns {any}
   */
  async getUserById(id) {
    const statement = `SELECT * FROM users WHERE id = ?;`;

    const result = await connection.execute(statement, [id]);
    console.log(result[0], "result");
    return result[0];
  }

  /**
   * @desc 获取用户个人资料
   * @date 2022-04-30
   * @param {any} id
   * @returns {any}
   */
  async getPersonData(id) {
    const statement = `SELECT i.user_id, i.position, i.company, i.introduction, i.homepage, 
    i.portrait, u.name , u.id
      FROM userinfo i, users u 
      WHERE i.user_id = 1 & i.user_id = u.id;`;
    const result = await connection.execute(statement, [id]);
    console.log(result[0], "result");
    return result[0];
  }
}

module.exports = new UserService();
