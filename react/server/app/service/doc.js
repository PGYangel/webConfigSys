'use strict';

const Service = require('egg').Service,
  uuid = require('uuid');

class DocService extends Service {
  // 新增文案项
  async add(form) {
    const result = {};
    try {
      await this.app.mysql.insert('doc_list', {
        select_id: uuid.v4(),
        projectid: form.projectId,
        docTitle: form.docTitle,
        activityUrl: form.activityUrl,
      });
      result.state = 1;
      result.msg = '添加成功';
    } catch (e) {
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }

  // 获取文案管理项列表
  async getList(form) {
    const result = {};
    try {
      const queryText = form.queryText ? `%${form.queryText}%` : '%%';
      const d = await this.app.mysql.query(`select * from doc_list 
      where isEnabled=1 and projectid=? and (docTitle like ? or activityUrl like ?) 
      limit ?,?`, [
        form.projectId, queryText, queryText, (form.pageIndex * form.pageSize), form.pageSize,
      ]);
      const total = await this.app.mysql.query(`select count(1) as count from doc_list 
      where isEnabled=1 and projectid=? and (docTitle like ? or activityUrl like ?)`, [
        form.projectId, queryText, queryText,
      ]);
      result.data = d.map(val => {
        const data = {
          id: val.select_id,
          createTime: val.createTime,
          updateTime: val.updateTime,
          isEnabled: val.isEnabled,
          url: val.activityUrl,
          title: val.docTitle,
          detail: val.detail,
        };
        return data;
      });
      result.total = total[0].count;
      result.state = 1;
      result.msg = '读取成功';
    } catch (e) {
      result.data = [];
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }

  // 根据ID获取文案管理内容
  async getDataForId(id) {
    const result = {};
    try {
      const d = await this.app.mysql.select('doc_list', {
        where: { select_id: id },
      });
      result.data = {
        id: d[0].select_id,
        detail: JSON.parse(d[0].detail),
        isEnabled: d[0].isEnabled,
        url: d[0].activityUrl,
        title: d[0].docTitle,
      };
      result.state = 1;
      result.msg = '读取成功';
    } catch (e) {
      result.data = {};
      result.state = 0;
      result.error = '读取失败';
    }
    return result;
  }
  // 修改内容
  async modifData(form) {
    const result = {};
    try {
      await this.app.mysql.update('doc_list', {
        detail: form.detail,
        isEnabled: form.isEnabled,
        activityUrl: form.url,
        docTitle: form.title,
      }, {
        where: {
          select_id: form.id,
        },
      });
      result.state = 1;
      result.msg = '更新成功';
    } catch (e) {
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }

  // 删除文案管理项
  async delData(id) {
    const result = {};
    try {
      await this.app.mysql.update('doc_list', {
        isEnabled: 0,
      }, {
        where: {
          select_id: id,
        },
      });
      result.state = 1;
      result.msg = '删除成功';
    } catch (e) {
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }

  // 获取文案内容
  async getDetailForId(id) {
    const result = {};
    try {
      const d = await this.app.mysql.select('doc_list', {
        where: {
          select_id: id,
          isEnabled: 1,
        },
        columns: [ 'detail' ],
      });
      const detail = JSON.parse(d[0].detail);
      result.data = detail.map(x => x.value);
      result.state = 1;
      result.msg = '获取成功';
    } catch (e) {
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }
}

module.exports = DocService;
