const connection = require("../app/database");

class articleService {
  /**
   * @desc 创建用户
   * @date 2022-03-15
   * @param {any} user, name:账号, password:密码
   * @returns {any}
   */
  async createArticle(articleData) {
    console.log("用户信息保存到数据库中", articleData);
    const { user_id, title, content } = articleData;
    const statement = `INSERT INTO users (user_id, title, content) VALUES (?, ?, ?)`;
    const result = await connection.execute(statement, [
      user_id,
      title,
      content,
    ]);
    return result;
  }
}

module.exports = new articleService();
