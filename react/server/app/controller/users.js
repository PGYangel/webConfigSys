'use strict';

const Controller = require('egg').Controller;
const PasswordCryp = require('../utils/passwordCryp');


class UsersController extends Controller {
  // 用户登录验证
  async login() {
    const { ctx, app } = this;
    const form = {
      userName: ctx.request.body.userName,
      password: PasswordCryp(ctx.request.body.password, app.config.CRYPTKEY),
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
    const form = {
      token: ctx.request.body.token,
      userName: ctx.request.body.userName,
    };
    const result = await ctx.service.users.checkToken(form);
    ctx.body = result;
  }

  // 用户列表
  async usersList() {
    const { ctx } = this;
    const isToken = await ctx.service.users.checkToken({
      userName: ctx.request.query.adminUser,
      token: ctx.request.query.token,
    });
    if (isToken.state) {
      const userInfo = await ctx.service.users.login({ userName: ctx.request.query.adminUser });
      if (userInfo) {
        const form = {
          queryText: ctx.request.query.queryText,
          pageSize: parseInt(ctx.request.query.pageSize),
          pageIndex: parseInt(ctx.request.query.pageIndex) - 1,
          powers: userInfo.powers,
          userName: ctx.request.query.adminUser,
        };
        const result = await ctx.service.users.usersList(form);
        ctx.body = result;
      } else {
        ctx.body = { state: 0, error: '非法访问' };
      }
    } else {
      ctx.body = { state: 0, error: '非法访问' };
    }
  }

  // 获取用户信息
  async userInfo() {
    const { ctx } = this;
    const isToken = await ctx.service.users.checkToken({
      userName: ctx.request.query.userName,
      token: ctx.request.query.token,
    });
    if (isToken.state) {
      const userInfo = await ctx.service.users.login({ userName: ctx.request.query.userName });
      ctx.body = {
        state: 1,
        data: userInfo,
      };
    } else {
      ctx.body = { state: 0, error: '非法访问' };
    }
  }

  // 新增用户
  async addUser() {
    const { ctx, app } = this;
    const password = PasswordCryp(ctx.request.body.password, app.config.CRYPTKEY);
    const form = {
      userName: ctx.request.body.userName,
      name: ctx.request.body.name,
      password,
      powers: ctx.request.body.powers,
    };
    const result = await ctx.service.users.addUser(form);
    ctx.body = result;
  }

  // 修改密码
  async modifyPW() {
    const { ctx, app } = this;
    const form = {
      userName: ctx.params.id,
      oldPW: PasswordCryp(ctx.request.body.oldPassword, app.config.CRYPTKEY),
      newPW: PasswordCryp(ctx.request.body.newPassword, app.config.CRYPTKEY),
    };
    const result = await ctx.service.users.modifyPW(form);
    ctx.body = result;
  }

  // 删除用户
  async delUser() {
    const { ctx } = this;
    const result = await ctx.service.users.delUser(ctx.params.id);
    ctx.body = result;
  }

}

module.exports = UsersController;
