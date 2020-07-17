//Swagger注释书写要领：
//注意缩进空格和前面的注释符*，不然会识别错误运行失败
//最上面必须是/**的写法，最后是*/，不然识别格式错误
//中间的*需要对齐，要么全部空一格要么全部不空格。
//中间内容只要不是平级关系就必须要有缩进或者空格来表示。
//里面遵循的是Swagger YAML语法，可以搜索该语法规则来进行书写
//同缩进使用“-”来表示同级

//Models编写：
//type:后面需要加个空格，不然无法显示
/**
 * @swagger
 * definition:
 *     ModelName:
 *          properties:
 *              name:
 *                  type: string
 *                  description: 名称
 *              time:
 *                  type: date
 *                  description: 时间
 *              sex:
 *                  type: boolean
 *                  description: 性别
 *              username:
 *                  type: string
 *                  description: 用户名
 */

/**
 * @swagger
 * definition:
 *  Model2:
 *   properties:
 *    name:
 *     type: string
 *     description: 名称
 *    sex:
 *     type: number
 *     description: 性别
 *    time:
 *     type: date
 *     description: 创建时间
 *    list:
 *     type: array
 *     description: 列表
 */


/***********************************************************************************************************************/
//get接口书写
/**
 * @swagger
 * /user/test/t:
 *   get:
 *     tags:
 *       - TestAPI
 *     description: GET请求接口
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */
//post接口书写
/**
 * @swagger
 * /user/test/p:
 *   post:
 *     tags:
 *       - TestAPI
 *     description: POST提交接口
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: from
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Model2'
 *     responses:
 *       200:
 *         description: success
 */

//put 接口书写
/**
 * @swagger
 * /user/test/u:
 *   put:
 *     tags:
 *       - TestAPI
 *     description: PUT提交接口
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: from
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Model2'
 *     responses:
 *       200:
 *         description: success
 */

//delete 接口书写
/**
 * @swagger
 * /user/test/d:
 *   delete:
 *     tags:
 *       - TestAPI
 *     description: delete提交接口
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: from
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Model2'
 *     responses:
 *       200:
 *         description: success
 */
