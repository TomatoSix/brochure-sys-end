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
    const { user_id, title, content, digest, isDraft } = articleData;
    const statement = `INSERT INTO article (user_id, title, content, digest, isDraft) VALUES (?, ?, ?, ?, ?)`;
    const result = await connection.execute(statement, [
      user_id,
      title,
      content,
      digest,
      isDraft,
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
    const statement = `SELECT a.title title, a.content content, a.likes likes, a.comments comments, u.name authorName, a.createAt createTime FROM  users u RIGHT JOIN article a on u.id = a.user_id WHERE  a.user_id = u.id and a.articleId = ? `;
    const result = await connection.execute(statement, [id]);
    return result;
  }

  /**
   * @desc 获取所有文章信息
   * @date 2022-04-26
   * @returns {any}
   */
  async getArticleDataAll() {
    const statement = `SELECT a.articleId articleId, a.digest digest, u.name authorName, 
    a.title title, a.content content, a.likes likes, a.comments comments, a.isDraft
    FROM  users u RIGHT JOIN article a on u.id = a.user_id order by a.articleId desc; `;
    const result = await connection.execute(statement);
    return result;
  }

  /**
   * @desc 获取登录用户的所有文章
   * @date 2022-04-29
   * @param {any} id
   * @returns {any}
   */
  async getArticleByUserId(id) {
    const statement = `SELECT  a.articleId id, a.title title, a.content content, a.digest digest,a.likes likes, 
    a.comments comments, u.name authorName, a.createAt createTime, a.isDraft 
      FROM users u RIGHT JOIN article a  ON u.id = a.user_id
      WHERE u.id = ? order by a.articleId desc`;
    const result = await connection.execute(statement, [id]);
    return result;
  }

  // 小册申请
  async brochureSubmit(data) {
    const {
      id,
      headline,
      theme,
      introduce,
      outline,
      authorName,
      authorIntroduction,
      isPublish,
    } = data;
    const statement = `INSERT INTO brochure (user_id, headline, theme, introduce, outline, authorName, authorIntroduction, isPublish) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const result = await connection.execute(statement, [
      id,
      headline,
      theme,
      introduce,
      outline,
      authorName,
      authorIntroduction,
      isPublish,
    ]);
    if (result.length) {
      console.log("1111", data);

      const statement2 = `select * from brochure b  where b.user_id = ? and  b.headline = ? and b.theme = ? and  b.introduce = ?;`;
      const res = await connection.execute(statement2, [
        id,
        headline,
        theme,
        introduce,
      ]);
      return res[0];
    }
  }

  // 根据小册id获取小册信息
  async getBrochureById(id) {
    const statement = `SELECT * FROM  brochure b
    WHERE  b.brochureId = ?`;
    const result = await connection.execute(statement, [id]);
    return result;
  }

  // 获取所有小册信息
  async getBrochureAll() {
    const statement = `SELECT * FROM  brochure where brochure.isPublish = 1 order by brochure.brochureId desc`;
    const result = await connection.execute(statement);
    return result;
  }

  // 根据用户Id获取小册所有信息
  async getBrochureByUserId(id) {
    const statement = `SELECT  *
    FROM brochure b RIGHT JOIN userinfo u  ON b.user_id = u.user_id
    WHERE b.user_id = ?`;
    const result = await connection.execute(statement, [id]);
    return result;
  }
  // 根据小册id获取小册章节
  async getChapterAllByBrochureId(id) {
    const statement = `SELECT c.chapterId, c.user_id, c.brochureId, c.articleId, c.title, c.title, a.content 
    from chapter c 
    left join article a
    on c.articleId = a.articleId
    WHERE c.brochureId = ? order by c.sort asc;`;
    const result = await connection.execute(statement, [id]);
    return result;
  }
  // 添加章节
  async addChapter(data) {
    const { user_id, brochureId, articleId, title, sort } = data;
    console.log(data, "data");
    const statement = `INSERT INTO chapter (user_id, brochureId, articleId, title, sort) 
    VALUES (?,?,?,?,?)`;
    const result = await connection.execute(statement, [
      user_id,
      brochureId,
      articleId,
      title,
      sort,
    ]);
    return result;
  }

  // 修改章节内容
  async reviseChapterContent(data) {
    const { content, title, sort, chapterId } = data;
    console.log(data, "data");
    console.log(chapterId, "chapterId");
    const res = await this.findArticleId(chapterId);
    console.log(res, "出结果");
    const statement = `update chapter set title=?, sort=? where chapterId=?;
    update article set content=? where articleId = ?`;
    const result = await connection.execute(statement, [
      title,
      sort,
      chapterId,
      content,
      res[0].articleId,
    ]);
    console.log(result, "result");
    return result;
  }

  // 根据chapterId寻找articleId
  async findArticleId(id) {
    const statement = `SELECT a.articleId from article a left join chapter c on c.articleId = a.articleId where c.chapterId = ? `;
    const result = await connection.execute(statement, [id]);
    if (result.length) {
      return result[0];
    }
  }
}

module.exports = new articleService();
