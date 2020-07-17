import request from '../util/request'
import qs from 'qs'

//用户登录
export function login(data) {
    return request({
        url: '/users/login',
        method: 'post',
        data: data
    })
}

//验证Token
export function checkToken(data) {
    return request({
        url: '/users/checkToken',
        method: 'post',
        data: data
    })
}

// 用户列表
export function usersList(data) {
    const query = qs.stringify(data)
    return request({
        url: `/users/list?${query}`,
        method: 'get'
    })
}

// 用户信息
export function userInfo(data) {
    const query = qs.stringify(data)
    return request({
        url: `/users/info?${query}`,
        method: 'get'
    })
}

// 新增用户
export function addUser(data) {
    return request({
        url: `/users/add`,
        method: 'post',
        data
    })
}

export function modPassword(id, data) {
    return request({
        url: `/users/modifyPW/${id}`,
        method: 'put',
        data
    })
}

export function delUser(id) {
    return request({
        url: `/users/del/${id}`,
        method: 'delete'
    })
}
