'use strict';

module.exports = app => {
  const { router, controller } = app;
  const sysCors = app.middleware.sysCors(app);

  /**
     * @swagger
     * /projects/list:
     *   get:
     *     tags:
     *       - Projects
     *     description: 获取项目列表
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/projects/list', sysCors, controller.projects.getList);
};
