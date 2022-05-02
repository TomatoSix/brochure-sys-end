const Router = require("koa-router");
const {
  createArticle,
  getArticleById,
  getArticleAll,
  getArticleByUserId,
} = require("../controller/article.controller");
const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", createArticle);
// 根据文章Id获取文章信息
articleRouter.get("/getArticleById/:id", getArticleById);
// 获取所有文章
articleRouter.get("/getArticleAll", getArticleAll);
// 获取当前用户所有文章
articleRouter.get("/getArticleByUserId/:id", getArticleByUserId);

// 小册申请
articleRouter.get("/apply/:id", getArticleByUserId);

module.exports = articleRouter;
