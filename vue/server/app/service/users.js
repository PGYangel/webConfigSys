'use strict';
const Service = require('egg').Service;
const COOKIE_EXP = 8 * 60;

class UsersService extends Service {
  // 用户登录验证
  async login(form) {
    const d = await this.app.mysql.get('users', form);
    const result = {};
    if (d) {
      result.userName = d.userName;
      result.name = d.name;
      result.powers = d.powers;
      result.cookieExp = COOKIE_EXP;
      result.state = 1;
    } else {
      result.state = 0;
    }
    return result;
  }
  // 添加登录token
  async addToken(data) {
    const result = {};
    try {
      await this.app.mysql.delete('token_list', {
        user_name: data.userName,
      });
      const t = new Date().getTime() + (COOKIE_EXP * 60 * 1000);
      const nd = new Date(t);
      await this.app.mysql.insert('token_list', {
        token: data.token,
        user_name: data.userName,
        maxTime: nd,
      });
      result.state = 1;
    } catch (e) {
      result.state = 0;
    }
    return result;
  }
  // 查找对比token
  async checkToken() {
    const { ctx } = this;
    const result = {};
    try {
      /* 'token_list', {
            where: {
                token: ctx.request.body.token,
                user_name: ctx.request.body.userName,
            },
        }*/
      const nd = new Date();
      const d = await this.app.mysql.query(`select count(1) as count from token_list 
      where token=? and user_name=? and maxTime>?`, [ ctx.request.body.token, ctx.request.body.userName, nd ]);
      if (d[0].count) {
        result.state = 1;
      } else {
        result.state = 0;
      }
    } catch (e) {
      result.state = 0;
    }
    return result;
  }

}

module.exports = UsersService;
