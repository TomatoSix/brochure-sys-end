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

    const statement1 = `INSERT INTO users (name, password) VALUES (?, ?)`;
    const result = await connection.execute(statement1, [name, password]);

    const res = await this.getUserByName(name);
    console.log(res, "结果在这里");
    const { id } = res[0];

    const statement2 = "INSERT INTO userInfo (user_id, name) VALUES (?, ?)";
    let answer = await connection.execute(statement2, [id, name]);
    return answer;
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
    i.portrait, u.name, u.id
      FROM userinfo i, users u 
      WHERE u.id = ? AND i.user_id = u.id;`;
    const result = await connection.execute(statement, [id]);
    console.log(result[0], "result");
    return result[0];
  }

  /**
   * @desc 设置用户个人资料
   * @date 2022-04-30
   * @param {any} data
   * @returns {any}
   */
  async setPersonData(data) {
    const { name, position, company, homepage, introduction, portrait, id } =
      data;
    const statement = `UPDATE userinfo set position=?, company=?, introduction=?, portrait=?, name =?, homepage=?
		WHERE id = ?`;
    const result = await connection.execute(statement, [
      position,
      company,
      introduction,
      portrait,
      name,
      homepage,
      id,
    ]);
    console.log(result, "result");
    return result;
  }

  async updateAvatarUrlById(avatarUrl, userId) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [avatarUrl, userId]);
    return result;
  }
}

module.exports = new UserService();
