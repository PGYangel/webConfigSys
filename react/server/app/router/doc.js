'use strict';

module.exports = app => {
  const { router, controller } = app;
  const sysCors = app.middleware.sysCors(app);
  const handleLog = app.middleware.handleLog(app);

  /**
     * @swagger
     * definition:
     *  docAdd:
     *   properties:
     *    title:
     *     type: string
     *     description: 标题
     *    url:
     *     type: string
     *     description: 活动url
     * /doc/add:
     *   post:
     *     tags:
     *       - Doc
     *     description: 新增文案项
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: from
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/docAdd'
     *     responses:
     *       200:
     *         description: success
     */
  router.post('/doc/add', sysCors, handleLog, controller.doc.add);
  /**
     * @swagger
     * /doc/list:
     *   get:
     *     tags:
     *       - Doc
     *     description: 获取文案管理项列表
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/doc/list', sysCors, controller.doc.getList);
  /**
     * @swagger
     * /doc/getDataForId:
     *   get:
     *     tags:
     *       - Doc
     *     description: 根据ID获取文案管理内容
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/doc/getDataForId', sysCors, controller.doc.getDataForId);

  router.post('/doc/uploadImg', sysCors, handleLog, controller.doc.uploadImg);

  router.post('/doc/modifData', sysCors, handleLog, controller.doc.modifData);

  /**
     * @swagger
     * /doc/delData/{id}:
     *   delete:
     *     tags:
     *       - Doc
     *     summary: "删除文档管理项"
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: "path"
     *         required: true
     *     responses:
     *       200:
     *         description: success
     */
  router.delete('/doc/delData/:id', sysCors, handleLog, controller.doc.delData);

  router.get('/doc/getDetail/:id', controller.doc.getDetailForId);

  router.get('/doc/getDetail/jsonp/:id', app.jsonp(), controller.doc.getDetailForId);
};
