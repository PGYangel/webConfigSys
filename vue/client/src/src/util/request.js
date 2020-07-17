import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://webs.yr.dev.q1.com/'
} else {
  axios.defaults.baseURL = 'http://webs.yr.dev.q1.com/'
}
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'

let service = axios.create({
  timeout: 500000
})

service.interceptors.request.use(config => {
  // console.log(config)
  if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
    config.data = qs.stringify(config.data)
  }
  return config
})

service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    if (error.response.status === 401) {
      var url = ''
      if (typeof error.response.data.message !== 'undefined') {
        url = error.response.data.message
      } else {
        url = error.response.data
      }
      window.location.href = url + window.location.href
    } else {
      Message({
        message: error.response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
