// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vueaxios from 'vue-axios'
import axios from 'axios'
import store from '@/store'
import {getCookie} from '@/util/cookies'
import {checkToken} from '@/api/users'

Vue.use(ElementUI)
Vue.use(Vueaxios, axios)
Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  const token = getCookie('login_token')
  const userName = getCookie('userName')
  if (to.path !== '/') {
    if (token !== '' && userName !== '') {
      checkToken({token, userName}).then(res => {
        if (res.state) {
          next()
        } else {
          next('/')
        }
      }).catch(ex => { next('/') })
    } else {
      next('/')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
