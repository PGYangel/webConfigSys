'use strict';

const Controller = require('egg').Controller,
  fs = require('fs'),
  path = require('path'),
  uuid = require('uuid');

class DocController extends Controller {
  // 新增文案项
  async add() {
    const { ctx } = this;
    const form = {
      docTitle: ctx.request.body.title,
      activityUrl: ctx.request.body.url,
    };
    const result = await ctx.service.doc.add(form);
    ctx.body = result;
  }
  // 获取文案管理项列表
  async getList() {
    const { ctx } = this;
    const form = {
      pageSize: parseInt(ctx.query.pageSize),
      pageIndex: parseInt(ctx.query.pageIndex),
    };
    const result = await ctx.service.doc.getList(form);
    ctx.body = result;
  }

  // 根据ID获取文案管理内容
  async getDataForId() {
    const { ctx } = this;
    const result = await ctx.service.doc.getDataForId(ctx.query.id);
    ctx.body = result;
  }
  // 上传示意图
  async uploadImg() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const filePath = fs.readFileSync(file.filepath);
    const now = new Date().getTime();
    const fileName = now + uuid.v4() + file.filename.substring(file.filename.lastIndexOf('.'), file.filename.length);

    try {
      fs.writeFileSync(path.join(`app/public/images/doc/${fileName}`), filePath);
      ctx.body = {
        fileName,
        state: 1,
      };
    } catch (e) {
      ctx.body = {
        data: '上传错误',
        state: 0,
      };
    }
  }
  // 修改内容
  async modifData() {
    const { ctx } = this;
    const form = {
      id: ctx.request.body.id,
      detail: JSON.stringify(ctx.request.body.detail),
      isEnabled: ctx.request.body.isEnabled,
      url: ctx.request.body.url,
      title: ctx.request.body.title,
    };
    const result = await ctx.service.doc.modifData(form);
    ctx.body = result;
  }
  // 删除文案管理项
  async delData() {
    const { ctx } = this;
    const result = await ctx.service.doc.delData(ctx.params.id);
    ctx.body = result;
  }
  // 获取文案内容
  async getDetailForId() {
    const { ctx } = this;
    const result = await ctx.service.doc.getDetailForId();
    // console.log(result.data)
    ctx.body = result;
  }
}

module.exports = DocController;
