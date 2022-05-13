const connection = require("../app/database");
const commentRouter = require("../router/comment.router");

class CommentService {
  async create(articleId, content, userId) {
    console.log(articleId, content, userId);

    const statement = `INSERT INTO comment (content, article_id, user_id) VALUES (?, ?, ?);`;

    const [result] = await connection.execute(statement, [
      content,
      articleId,
      userId,
    ]);
    return result;
  }

  async setCount(count, articleId) {
    const statement = ` update article a set comments = ? where a.articleId = ?`;
  }

  async reply(articleId, content, userId, commentId) {
    const statement = `INSERT INTO comment (content, article_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [
      content,
      articleId,
      userId,
      commentId,
    ]);
    return result;
  }

  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?`;
    const [result] = await connection.execute(statement, [content, commentId]);
    return result;
  }

  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?`;
    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }

  async getCommentsByMomentId(articleId) {
    const statement = `
    SELECT 
      m.commentId id, m.content, m.comment_id commendId, m.createAt createTime,
      JSON_OBJECT('id', u.id, 'name', u.name) user 
    FROM comment m
    LEFT JOIN users u ON u.id = m.user_id
    WHERE article_id = ?;
    `;
    const [result] = await connection.execute(statement, [articleId]);
    return result;
  }
}

module.exports = new CommentService();
