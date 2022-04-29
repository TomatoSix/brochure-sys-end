const Router = require("koa-router");
const  { saveArticle } require "../controller/article.controller";
const articleRouter = new Router({ prefix: "/article" });

// 保存文章
articleRouter.post("/savePaper", saveArticle);

module.exports = authRouter;
