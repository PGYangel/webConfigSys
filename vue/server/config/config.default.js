/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // 配置上传
  config.multipart = {
    mode: 'file',
    fileExtensions: [ '.png', '.jpg', '.jpeg' ], // 扩展上传的文件格式
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585708831885_6861';
  // 设置静态文件prefix
  config.static = {
    prefix: '/',
  };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'abc123',
      database: 'websystem',
    },
  };
  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // add your middleware config here
  config.middleware = [];
  config.jwt = {
    secret: 's5$7ef%c57#d7x78ehj&57ION%SI@DW!348!@ikd', // 自定义 token 的加密条件字符串
  };
  // add your user config here
  const userConfig = {
    // 系统白名单
    sysWhiteList: [
      'http://webc.yr.dev.q1.com',
      'http://zq-zltj.dev.q1op.com',
    ],
    // 网页白名单
    webWhiteList: [
      'http://gg.yr.dev.q1.com',
    ],
    IMAGES_FILE: 'http://webs.yr.dev.q1.com/images/',
  };

  return {
    ...config,
    ...userConfig,
  };
};
