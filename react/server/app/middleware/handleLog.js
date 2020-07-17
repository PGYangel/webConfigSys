/**
 * 操作日志中间件
 * */

'use strict';

module.exports = app => {
  return async (ctx, next) => {
    const logData = {};
    const token = ctx.header['x-token'];
    const user = ctx.header['x-user'];
    const nd = new Date();
    try {
      const d = await app.mysql.query(`select count(1) as count from token_list 
      where token=? and user_name=? and maxTime>?`, [ token, user, nd ]);
      if (d[0].count) {
        logData.user = user;
        logData.request_type = ctx.request.method || 'error';
        logData.request_url = ctx.request.url || 'error';
        logData.content = JSON.stringify(ctx.request.body) || '';
        await next();
        logData.result = JSON.stringify(ctx.response.body);
        await app.mysql.insert('handle_log', logData);
      } else {
        ctx.body = {
          state: 0,
          error: '登录超时，请重新登录！',
        };
      }
    } catch (e) {
      ctx.body = {
        state: 0,
        error: '请求错误！',
        msg: e.message,
      };
    }
  };
};

