'use strict';
module.exports = app => {
  app.once('server', server => {
    global.docCache = {};
    global.docCacheNumber = 0;
    global.docCacheMax = 100;
    // websocket
  });
  app.on('error', (err, ctx) => {
    // console.log(err);
    // report error
  });
  app.on('request', ctx => {
    // console.log(ctx);
    // console.log(ctx.header.origin);
    // log receive request
  });
  app.on('response', ctx => {
    // console.log(ctx);
    // ctx.starttime is set by framework
    // const used = Date.now() - ctx.starttime;
    // log total cost
  });
};
