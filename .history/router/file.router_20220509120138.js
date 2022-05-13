const Router = require("koa-router");

const { avatarHandler } = require("../middleware/file.middleware");
const { saveAvatarInfo } = require("../controller/file.controller");

const fileRouter = new Router({ prefix: "/upload" });

fileRouter.post("/avatar", avatarHandler, saveAvatarInfo);
// fileRouter.post("/picture", pictureHandler, pictureResize, savePictureInfo);

module.exports = fileRouter;
