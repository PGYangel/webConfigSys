import axios from 'axios'
import qs from 'qs'
import apiDomain from './apiDomain'
import cookie from 'js-cookie'

axios.defaults.baseURL = apiDomain
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
axios.defaults.withCredentials = true

let service = axios.create({
    timeout: 500000
})

service.interceptors.request.use(config => {
    if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
        config.data = qs.stringify(config.data)
    }
    config.headers['x-token'] = cookie.get('token')
    config.headers['x-user'] = cookie.get('userName')
    return config
})

service.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
