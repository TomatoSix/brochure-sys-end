const jwt = require("jsonwebtoken");

const { getUserByName } = require("../service/user.service");
const errorType = require("../constants/error-types");
const { md5password } = require("../utils/password-handle");
const { PUBLIC_KEY } = require("../app/config");

/**
 * @desc 登录验证
 * @date 2022-03-16
 * @param {any} ctx
 * @param {any} next
 * @returns {any}
 */
const verifyLogin = async (ctx, next) => {
  // 1. 获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2. 判断用户名或密码是否为空，前端已校验

  // 3. 判断用户是否存在
  const result = await getUserByName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS);
    // 错误需要返回,第一个参数是监听的事件, 后面两个是传入的参数
    return ctx.app.emit("error", error, ctx);
  }

  // 4. 判断密码是否和数据库中的密码一致
  if (md5password(password) != user.password) {
    const error = new Error(errorType.PASSWORD_IS_INCORRECT);
    return ctx.app.emit("error", error, ctx);
  }
  // 把数据库中获取到的用户信息放到ctx.user属性上
  ctx.user = user;

  await next();
};

/**
 * @desc token验证授权
 * @date 2022-03-16
 * @param {any} ctx
 * @param {any} next
 * @returns {any}
 */
const verifyAuth = async (ctx, next) => {
  // 1. 获取token
  const authorization = ctx.headers.authorization;
  console.log(authorization, "authorization");
  if (!authorization) {
    const error = new Error(errorTypes.UNAUTHORIZED);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");

  // 2. 验证token
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    console.log(result, "result");
    ctx.user = result;
    await next();
  } catch (e) {
    console.log(e, "e");
    const error = new Error(errorType.UNAUTHORIZED);
    return ctx.app.emit("error", error, ctx);
  }
};

const verifyPermission = async (ctx, next) => {
  console.log("验证权限的middleware~");

  // 1.获取参数 { commentId: '1' }
  const [resourceKey] = Object.keys(ctx.params);
  const tableName = resourceKey.replace("Id", "");
  const resourceId = ctx.params[resourceKey];
  const { id } = ctx.user;

  // 2.查询是否具备权限
  try {
    const isPermission = await authService.checkResource(
      tableName,
      resourceId,
      id
    );
    if (!isPermission) throw new Error();
    await next();
  } catch (err) {
    const error = new Error(errorTypes.UNPERMISSION);
    return ctx.app.emit("error", error, ctx);
  }
};
module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission,
};
