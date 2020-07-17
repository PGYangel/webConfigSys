import request from '@/util/request'
// import qs from 'qs'

// 获取项目列表
export function getList () {
  return request({
    url: '/projects/list',
    method: 'get'
  })
}
