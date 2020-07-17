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

  config.cluster = {
    listen: {
      port: 80,
    },
  };
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
      host: '172.16.126.104',
      port: '3307',
      user: 'root',
      password: '123456',
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
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // jsonp 请求白名单
  config.jsonp = {
    whiteList: '.q1.com',
  };

  // add your middleware config here
  config.middleware = [];
  config.jwt = {
    secret: 's5$7ef%c57#d7x78ehj&57ION%SI@DW!348!@ikd', // 自定义 token 的加密条件字符串
  };
  // add your user config here
  const userConfig = {
    CRYPTKEY: '3iIl2+e#=qPZ94=*e94Cd@ek92&#dnD74Xin=+eoT5%&8#5',
    // 系统白名单
    sysWhiteList: [
      'http://webc.yr.dev.q1.com',
      'http://localhost:7015',
      'http://localhost:8080',
    ],
  };


  return {
    ...config,
    ...userConfig,
  };
};
