'use strict';
const Controller = require('egg').Controller;

class LogController extends Controller {
  async getList() {
    const { ctx } = this;
    const token = ctx.header['x-token'];
    const user = ctx.header['x-user'];
    const isToken = await ctx.service.users.checkToken({
      userName: user,
      token,
    });
    if (isToken.state) {
      const userInfo = await ctx.service.users.login({ userName: user });
      if (parseInt(userInfo.powers) <= 1) {
        const form = { ...ctx.request.query,
          pageSize: parseInt(ctx.request.query.pageSize),
          pageIndex: parseInt(ctx.request.query.pageIndex) - 1 };
        const result = await ctx.service.log.getList(form);
        ctx.body = result;
      } else {
        ctx.body = { state: 0, error: '非法访问' };
      }
    } else {
      ctx.body = { state: 0, error: '非法访问' };
    }
  }
}

module.exports = LogController;
