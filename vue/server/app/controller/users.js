'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 用户登录验证
  async login() {
    const { ctx } = this;
    const form = {
      userName: ctx.request.body.userName,
      password: ctx.request.body.password,
    };
    const result = await ctx.service.users.login(form);
    if (result.state) {
      const token = this.app.jwt.sign({
        data: result.userName + new Date().getTime(),
      }, this.app.config.jwt.secret);
      result.token = token;
      await ctx.service.users.addToken({ token, userName: result.userName });
    }
    ctx.body = result;
  }
  // 查找对比token
  async checkToken() {
    const { ctx } = this;
    const result = await ctx.service.users.checkToken();
    ctx.body = result;
  }
}

module.exports = UsersController;
