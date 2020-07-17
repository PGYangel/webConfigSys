'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 设置路由跨域
  const sysCors = app.middleware.sysCors(app);
  /**
     * @swagger
     * /:
     *   get:
     *     tags:
     *       - TestAPI
     *     description: 网站管理系统API请求测试
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/', sysCors, controller.home.index);
  router.get('/swagger.json', sysCors, controller.home.swagger);
};
