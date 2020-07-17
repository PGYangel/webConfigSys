'use strict';
module.exports = app => {
  app.once('server', server => {
    // websocket
  });
  app.on('error', (err, ctx) => {
    // console.log(err);
    // report error
  });
  app.on('request', ctx => {
    // console.log('app')
    // console.log(ctx.header.origin);
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    // const used = Date.now() - ctx.starttime;
    // log total cost
  });
};
