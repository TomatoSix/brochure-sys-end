const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");
const {
  avatarHandler,
  saveAvatarInfo,
  avatarInfo,
} = require("../middleware/file.middleware");

const fileRouter = new Router({ prefix: "/upload" });

// 上传头像
fileRouter.post("/avatar", verifyAuth, avatarHandler, saveAvatarInfo);
// fileRouter.post("/picture", pictureHandler, pictureResize, savePictureInfo);

// 获取头像
fileRouter.get("/:userId/avatar", avatarInfo);
module.exports = fileRouter;
