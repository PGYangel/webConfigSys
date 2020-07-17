'use strict';

module.exports = app => {
  const { router, controller } = app;
  const sysCors = app.middleware.sysCors(app);

  router.post('/users/login', sysCors, controller.users.login);

  router.post('/users/checkToken', sysCors, controller.users.checkToken);
};
