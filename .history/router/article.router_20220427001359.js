const Router = require("koa-router");
const {
  createArticle,
  getArticleById,
} = require("../controller/article.controller");
const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", createArticle);
articleRouter.post("/getArticleById", getArticleById);

module.exports = articleRouter;
