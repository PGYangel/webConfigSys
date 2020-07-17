'use strict';

const Controller = require('egg').Controller,
  jsdoc = require('../../jsdoc')();

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      msg: '欢迎使用接口',
    };
  }
  async swagger() {
    this.ctx.set('Content-Type', 'application/json');
    this.ctx.body = jsdoc;
  }

}

module.exports = HomeController;
