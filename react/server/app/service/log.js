'use strict';

const Service = require('egg').Service;

class LogService extends Service {
  async getList(form) {
    const result = {};
    try {
      const user = form.user ? `%${form.user}%` : '%%';
      const url = form.url ? `%${form.url}%` : '%%';
      const type = form.type ? `request_type='${form.type}' and` : '';
      const time = form.startTime ? `createTime between '${form.startTime}' and '${form.endTime}' and` : '';
      const d = await this.app.mysql.query(`select * from handle_log 
      where ${type} ${time} user like ? and request_url like ? order by createTime DESC limit ?,?`,
      [ user, url, (form.pageIndex * form.pageSize), form.pageSize ]);
      const count = await this.app.mysql.query(`select count(1) as count from handle_log 
      where ${type} ${time} user like ? and request_url like ?`,
      [ user, url ]);
      result.data = d;
      result.total = count[0].count;
      result.state = 1;
    } catch (e) {
      result.state = 0;
      result.error = e.message;
    }
    return result;
  }
}

module.exports = LogService;
