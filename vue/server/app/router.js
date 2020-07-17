'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/home')(app);
  require('./router/users')(app);
  require('./router/projects')(app);
  require('./router/doc')(app);
};
