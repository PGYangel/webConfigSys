'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.mysql = {
    client: {
      host: '172.16.126.104',
      port: '3307',
      user: 'root',
      password: '123456',
      database: 'websystem',
    },
  };

  const userConfig = {
    // 系统白名单
    sysWhiteList: [
      'http://webc.yr.dev.q1.com',
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
