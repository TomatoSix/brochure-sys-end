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
    const statement = `INSERT INTO article (user_id, title, content) VALUES (?, ?, ?)`;
    const result = await connection.execute(statement, [
      user_id,
      title,
      content,
    ]);
    return result;
  }

  /**
   * @desc 根据文章Id获取文章信息
   * @date 2022-04-26
   * @param {any} id
   * @returns {any}
   */
  async getArticleDataById(id) {
    const { user_id, title, content } = articleData;
    const statement = `INSERT INTO article (user_id, title, content) VALUES (?, ?, ?)`;
    const result = await connection.execute(statement, [
      user_id,
      title,
      content,
    ]);
    return result;
  }

  /**
   * @desc 获取所有文章信息
   * @date 2022-04-26
   * @returns {any}
   */
  async getArticleDataAll() {}
}

module.exports = new articleService();
