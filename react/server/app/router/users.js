'use strict';

module.exports = app => {
  const { router, controller } = app;
  const sysCors = app.middleware.sysCors(app);
  const handleLog = app.middleware.handleLog(app);

  router.post('/users/login', sysCors, controller.users.login);

  router.post('/users/checkToken', sysCors, controller.users.checkToken);

  router.get('/users/info', sysCors, controller.users.userInfo);

  router.get('/users/list', sysCors, controller.users.usersList);

  router.post('/users/add', sysCors, handleLog, controller.users.addUser);

  router.put('/users/modifyPW/:id', sysCors, controller.users.modifyPW);

  router.del('/users/del/:id', sysCors, handleLog, controller.users.delUser);

};
