const fileService = require("../service/file.service");
const userService = require("../service/user.service");
const { MYSQL_HOST, APP_PORT } = require("../app/config");
const { AVATAR_PATH } = require("../constants/file-path");

class FileController {
  // 保存头像
  async saveAvatarInfo(ctx, next) {
    // 1.获取图像相关的信息
    const { filename, mimetype, size } = ctx.req.file;
    const { id } = ctx.user;

    console.log(id, "id2");
    // 2.将图像信息数据保存到数据库中
    const result = await fileService.createAvatar(filename, mimetype, size, id);

    // 3.将图片地址保存到user表中
    const avatarUrl = `${MYSQL_HOST}:${APP_PORT}/users/${id}/avatar`;
    await userService.updateAvatarUrlById(avatarUrl, id);

    // 4.返回结果
    ctx.body = "上传头像成功~";
  }

  // 获取头像数据
  async avatarInfo(ctx, next) {
    // 1.用户的头像是哪一个文件呢?
    console.log(ctx.params, "params");
    const { userId } = ctx.params;
    const avatarInfo = await fileService.getAvatarByUserId(userId);

    // 2.提供图像信息
    ctx.response.set("content-type", avatarInfo.mimetype);
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
  }

  async savePictureInfo(ctx, next) {
    // 1.获取图像信息
    const files = ctx.req.files;
    const { id } = ctx.user;
    const { momentId } = ctx.query;

    // 2.将所有的文件信息保存到数据库中
    for (let file of files) {
      const { filename, mimetype, size } = file;
      await fileService.createFile(filename, mimetype, size, id, momentId);
    }

    ctx.body = "动态配图上传完成~";
  }
}

module.exports = new FileController();
