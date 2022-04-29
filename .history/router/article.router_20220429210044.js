const Router = require("koa-router");
const {
  createArticle,
  getArticleById,
  getArticleAll,
} = require("../controller/article.controller");
const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", createArticle);
articleRouter.get("/getArticleById/:id", getArticleById);
articleRouter.get("/getArticleAll", getArticleAll);

module.exports = articleRouter;
