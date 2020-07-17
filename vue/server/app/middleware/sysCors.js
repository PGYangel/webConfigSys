/**
 * 跨域中间件
 * @param:type
 * 为0，只读取系统白名单，type为1，读取网页白名单
 * */
'use strict';

module.exports = (app, type = 0) => {
  return async function sysCors(ctx, next) {
    let whiteList = [];
    whiteList = whiteList.concat(app.config.sysWhiteList);
    if (type) {
      whiteList = whiteList.concat(app.config.webWhiteList);
    }
    if (ctx.header.origin && whiteList.length > 0) {
      const origin = ctx.header.origin;
      const corsHost = whiteList.find(val => val === origin);
      if (corsHost) {
        ctx.set('Access-Control-Allow-Origin', corsHost);
        ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
      } else {
        ctx.remove('Access-Control-Allow-Origin');
      }
    }
    await next();
  };
};

