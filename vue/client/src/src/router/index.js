import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Projects from '@/view/Projects'
import Layout from '@/view/Layout/Layout'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export const fixedRoutes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/home',
    component: Layout,
    children: [{
      path: '',
      name: 'home-index',
      component: () => import('@/view/Home/Index')
    }]
  },
  {
    path: '/doc',
    alwaysShow: true,
    component: Layout,
    meta: { title: '文案管理', icon: 'role', isCommon: false },
    children: [{
      path: 'list',
      name: 'doc-list',
      component: () => import('@/view/DocManage/List'),
      meta: { title: '文案列表', icon: 'role', isCommon: false }
    }, {
      path: 'add',
      name: 'doc-add',
      component: () => import('@/view/DocManage/Add'),
      meta: { title: '添加文案管理项', icon: 'role', isCommon: false }
    }, {
      path: 'edit/:id',
      name: 'doc-edit',
      component: () => import('@/view/DocManage/Edit'),
      meta: { title: '编辑文案管理内容', icon: 'role', isCommon: false }
    }]
  },
  {
    path: '/news',
    alwaysShow: true,
    component: Layout,
    meta: { title: '新闻管理', icon: 'role', isCommon: false },
    children: [{
      path: 'list',
      name: 'news-list',
      component: () => import('@/view/News/List'),
      meta: { title: '新闻列表', icon: 'role', isCommon: false }
    }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: fixedRoutes
})
