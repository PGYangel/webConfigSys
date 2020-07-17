import request from '@/util/request'
// import qs from 'qs'

export function login (data) {
  return request({
    url: '/users/login',
    method: 'post',
    data: data
  })
}

export function checkToken (data) {
  return request({
    url: '/users/checkToken',
    method: 'post',
    data: data
  })
}
