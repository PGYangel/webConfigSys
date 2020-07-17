'use strict';

module.exports = {
  delCache(key) {
    if (global.docCache[key]) {
      delete global.docCache[key];
      global.docCacheNumber--;
    }
  },
  addCache(key, value) {
    global.docCacheNumber++;
    global.docCache[key] = {};
    global.docCache[key].value = value;
    global.docCache[key].expire = new Date().getTime();
  },
  updateCache(key, value) {
    global.docCache[key].value = value;
    global.docCache[key].expire = new Date().getTime();
  },
  modifyCache(key, value) {
    if (global.docCacheNumber < global.docCacheMax) {
      this.addCache(key, value);
    } else {
      let minExpire = 0;
      for (const itemKey in global.docCache) {
        if (!minExpire) {
          minExpire = global.docCache[itemKey].expire;
        } else {
          minExpire = minExpire > global.docCache[itemKey].expire ? global.docCache[itemKey].expire : minExpire;
        }
      }
      for (const itemKey in global.docCache) {
        if (global.docCache[itemKey].expire === minExpire) {
          this.delCache(itemKey);
          this.addCache(key, value);
          break;
        }
      }
    }
    return global.docCache[key];
  },
  getCache(key) {
    global.docCache[key].expire = new Date().getTime();
    return global.docCache[key];
  },
};

