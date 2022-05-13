const connection = require("../app/database");

class articleService {
  /**
   * @desc 创建文章
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

  // 修改文章
  async editPaper(data) {
    const { content, title, digest, articleId } = data;

    const statement = `update article a set digest=?, content=?, title=? where a.articleId = ?`;
    const result = await connection.execute(statement, [
      digest,
      content,
      title,
      articleId,
    ]);
    return result;
  }
  // 发布文章
  async emitPaper(data) {
    const { articleId, digest, content, title, isDraft } = data;
    console.log(data, "data");
    const statement = `update article a set digest=?, content=?, title=?, isDraft = ?
    where a.articleId = ?`;
    const result = await connection.execute(statement, [
      digest,
      content,
      title,
      isDraft,
      articleId,
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
    const statement = `SELECT a.title title, a.content content, a.digest digest, a.likes likes, a.comments comments, u.name authorName, a.createAt createTime FROM  users u RIGHT JOIN article a on u.id = a.user_id WHERE  a.user_id = u.id and a.articleId = ? `;
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
    const statement = `SELECT  a.articleId id, a.title title, a.content content, a.digest digest, a.likes likes, 
    a.comments comments, u.name authorName, a.createAt createTime, a.isDraft, a.collect collect
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
      price,
    } = data;
    const statement = `INSERT INTO brochure (user_id, headline, theme, introduce, outline, authorName, authorIntroduction, isPublish, price) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const result = await connection.execute(statement, [
      id,
      headline,
      theme,
      introduce,
      outline,
      authorName,
      authorIntroduction,
      isPublish,
      price,
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
    let res1 = await this.setChapter(title, sort, chapterId);
    let res2 = await this.setArticle(content, res[0].articleId);
    return [res1, res2];
  }

  // 根据chapterId寻找articleId
  async findArticleId(id) {
    const statement = `SELECT a.articleId from article a left join chapter c on c.articleId = a.articleId where c.chapterId = ? `;
    const result = await connection.execute(statement, [id]);
    if (result.length) {
      return result[0];
    }
  }

  // 修改chapter表
  async setChapter(title, sort, chapterId) {
    const statement = `update chapter set title=?, sort=? where chapterId=?;`;
    const result = await connection.execute(statement, [
      title,
      sort,
      chapterId,
    ]);
    if (result.length) {
      return result;
    }
  }
  // 修改article表
  async setArticle(content, articleId) {
    const statement = `update article set content=? where articleId = ?`;
    const result = await connection.execute(statement, [content, articleId]);
    if (result.length) {
      return result;
    }
  }
  // 小册发布
  async brochureEmit(data) {
    console.log(data, "data");
    const { brochureId } = data;
    const statement = `update brochure b set isPublish=1 where b.brochureId = ?`;
    const result = await connection.execute(statement, [brochureId]);
    if (result.length) {
      return result;
    }
  }

  // 小册购买
  async purchaseBrochure(data) {
    const { brochureId, buyer, seller } = data;
    console.log(data, "hello");
    const statement = `insert into orderlist (brochureId, buyer, seller) 
    VALUES (? ,?, ?)`;
    const result = await connection.execute(statement, [
      brochureId,
      buyer,
      seller,
    ]);
    if (result.length) {
      return result;
    }
  }

  // 是否购买小册
  async isPurchase(data) {
    const { brochureId, buyer } = data;
    const statement = `select * from  orderlist WHERE brochureId = '30' and buyer = '26'`;
    const result = await connection.execute(statement, [brochureId, buyer]);
    if (result.length) {
      return result;
    }
  }

  // 获取文章的各种数据
  async getArticleData(id) {
    const statement = `SELECT count(*) articleSum, sum(likes) likeSum,  sum(comments) commentSum, sum(collect) collectSum 
    from article WHERE user_id = ? and isDraft = 0;`;
    const result = await connection.execute(statement, [id]);
    if (result.length) {
      return result[0];
    }
  }

  // 获取订单列表
  async getOrderList(id) {
    const statement = `SELECT u.name, b.headline, b.price,  o.createAt from brochure b, 
    (orderlist o join users u on u.id = o.buyer) 
    where b.brochureId = (
      select o.brochureId brochureId  
      from orderlist o WHERE o.seller = 1
    )
    `;
    const result = await connection.execute(statement, [id]);
    console.log(result, "result6");
    if (result.length) {
      return result[0];
    }
  }
  // 获取已购小册记录
  async brochureBought(id) {
    const statement = `select b.brochureId brochureId, b.headline headline, b.introduce introduce 
    from brochure b where b.brochureId = (
    select o.brochureId from orderlist o where o.buyer = ?)`;
    const result = await connection.execute(statement, [id]);
    console.log(result, "result6");
    if (result.length) {
      return result[0];
    }
  }

  // 点赞
  async giveLike(userId, articleId) {
    const statement = `insert into like (user_id, articleId) 
    VALUES (?, ?)`;
    const result = await connection.execute(statement, [userId, articleId]);
    console.log(result, "result6");
    if (result.length) {
      return result[0];
    }
  }
  // 获取改文章的点赞数量
  async getLikeCount(params) {
    const { articleId } = params;
    const statement = `select a.likes count from article a where articleId = 50`;
    const result = await connection.execute(statement, [articleId]);
    if (result.length) {
      return result[0][0].count;
    }
  }
  // 修改赞的数量
  async changeLike(params, count) {
    const { articleId } = params;
    const statement = `update article a set likes = ? where a.articleId = ?`;
    const result = await connection.execute(statement, [count, articleId]);
    if (result.length) {
      return result;
    }
  }
}

module.exports = new articleService();
