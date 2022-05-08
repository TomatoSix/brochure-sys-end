const Router = require("koa-router");
const {
  createArticle,
  editPaper,
  getArticleById,
  getArticleAll,
  getArticleByUserId,
  brochureSubmit,
  getBrochureAll,
  getBrochureByUserId,
  getBrochureById,
  getChapterAllByBrochureId,
  addChapter,
  reviseChapterContent,
  brochureEmit,
  emitPaper,
  purchaseBrochure,
  isPurchase,
} = require("../controller/article.controller");
const articleRouter = new Router({ prefix: "/article" });

// 创建文章
articleRouter.post("/savePaper", createArticle);
// 修改文章
articleRouter.post("/editPaper", editPaper);

// 根据文章Id获取文章信息
articleRouter.get("/getArticleById/:id", getArticleById);
// 获取所有文章
articleRouter.get("/getArticleAll", getArticleAll);
// 获取当前用户所有文章
articleRouter.get("/getArticleByUserId/:id", getArticleByUserId);

// 小册申请
articleRouter.post("/apply", brochureSubmit);
// 获取所有小册
articleRouter.get("/getBrochureAll", getBrochureAll);
// 获取当前用户所有小册
articleRouter.get("/getBrochureByUserId/:id", getBrochureByUserId);
// 根据小册Id获取文章信息
articleRouter.get("/getBrochureById/:id", getBrochureById);

// 根据小册id获取小册章节
articleRouter.get("/getChapterAllByBrochureId/:id", getChapterAllByBrochureId);

// 添加章节
articleRouter.post("/addChapter", addChapter);

// 修改章节内容
articleRouter.post("/reviseChapterContent", reviseChapterContent);
// 小册发布
articleRouter.post("/brochureEmit", brochureEmit);
// 文章发布
articleRouter.post("/emitPaper", emitPaper);

// 购买小册
articleRouter.post("/purchaseBrochure", purchaseBrochure);
// 是否购买
articleRouter.post("/isPurchase", isPurchase);

// 获取文章的各种数据，总数，点赞总数，评论数，收藏数
articleRouter.get("getArticleData");

module.exports = articleRouter;
