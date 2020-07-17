'use strict';
const Subscription = require('egg').Subscription,
  docCache = require('../utils/docCache');

class UpdateDocCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '15m', // 15 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }
  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    // 15分钟定时更新缓存数据
    for (const itemKey in global.docCache) {
      const result = await this.ctx.service.doc.getDetailForId(itemKey);
      if (result.state) {
        docCache.updateCache(itemKey, result);
      }
    }
  }
}

module.exports = UpdateDocCache;
