'use strict';

module.exports = app => {
  const { router, controller } = app;
  const sysCors = app.middleware.sysCors(app);
  router.get('/log/getList', sysCors, controller.log.getList);
};
