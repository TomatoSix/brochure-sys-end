const errorType = require("../constants/error-types");
const service = require("../service/user.service");
const { md5password } = require("../utils/password-handle");
/**
 * @desc 验证用户
 * @date 2022-03-16
 * @param {any} ctx
 * @param {any} next
 * @returns {any}
 */
const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  // 1. 判断用户名或密码不为空，前端已经判断过

  // 2. 判断用户名有没有被注册过
  const result = await service.getUserByName(name);
  // console.log(result, 'result');
  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS);
    // 错误需要返回,第一个参数是监听的事件, 后面两个是传入的参数
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};

//
const verifyUserById = async (ctx, next) => {
  const result = await service.getUserByName(name);
};

/**
 * @desc 密码加密处理, 使用md5password
 * @date 2022-03-16
 * @param {any} ctx
 * @param {any} next
 * @returns {any}
 */
const handlePassword = async (ctx, next) => {
  let { password } = ctx.request.body;
  console.log(password, "password");
  // 加密完后再重新塞回去
  ctx.request.body.password = md5password(password);
  console.log(ctx.request.body.password, "password加密后的");

  await next();
};

module.exports = {
  verifyUser,
  handlePassword,
  verifyUserById,
};
