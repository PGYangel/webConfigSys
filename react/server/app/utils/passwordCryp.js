'use strict';
const CryptoJS = require('crypto-js');

module.exports = (password, key) => {
  return CryptoJS.SHA256(key + CryptoJS.MD5(password + key).toString()).toString();
};
