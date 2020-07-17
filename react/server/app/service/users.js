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
  async checkToken(form) {
    const result = {};
    try {
      const nd = new Date();
      const d = await this.app.mysql.query(`select count(1) as count from token_list 
      where token=? and user_name=? and maxTime>?`, [ form.token, form.userName, nd ]);
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
  // 用户列表
  async usersList(form) {
    const result = {};
    try {
      if (parseInt(form.powers) <= 1) {
        const queryText = form.queryText ? `%${form.queryText}%` : '%%';
        const d = await this.app.mysql.query(`select userName,name from users where (powers+0)>=? and 
        (userName like ? or name like ?) limit ?,?`,
        [ parseInt(form.powers), queryText, queryText, (form.pageIndex * form.pageSize), form.pageSize ]);
        const count = await this.app.mysql.query('select count(1) as count from users where userName like ? or name like ?',
          [ queryText, queryText ]);
        result.data = d;
        result.total = count[0].count;
        result.state = 1;
      } else {
        const d = await this.app.mysql.query('select userName,name from users where userName=?',
          [ form.userName ]);
        result.data = d;
        result.total = 1;
        result.state = 1;
      }
    } catch (e) {
      result.error = e.message;
      result.state = 0;
    }
    return result;
  }
  // 新增用户
  async addUser(form) {
    const result = {};
    try {
      const hasUser = await this.app.mysql.query('select count(1) as count from users where username=?', [
        form.userName,
      ]);
      if (!hasUser[0].count) {
        await this.app.mysql.insert('users', { ...form });
        result.state = 1;
      } else {
        result.error = '该用户名已存在！';
        result.state = 0;
      }
    } catch (e) {
      result.error = e.message;
      result.state = 0;
    }
    return result;
  }

  // 修改密码
  async modifyPW(form) {
    const result = {};
    try {
      const isRight = await this.login({
        userName: form.userName,
        password: form.oldPW,
      });
      if (isRight.state) {
        const d = await this.app.mysql.update('users', { password: form.newPW }, { where: { userName: form.userName } });
        if (d.affectedRows) {
          result.msg = '更新成功';
          result.state = 1;
        } else {
          result.error = '更新失败';
          result.state = 0;
        }
      } else {
        result.error = '旧密码不正确';
        result.state = 0;
      }
    } catch (e) {
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }

  // 删除用户
  async delUser(userName) {
    const result = {};
    try {
      const d = await this.app.mysql.delete('users', { userName });
      if (d.affectedRows) {
        result.msg = '删除成功';
        result.state = 1;
      } else {
        result.error = '删除失败';
        result.state = 0;
      }
    } catch (e) {
      result.error = e.message;
      result.state = 0;
    }
    return result;
  }

}

module.exports = UsersService;
