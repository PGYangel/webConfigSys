// 设置cookie
export function setCookie (cname, cvalue, exmin) {
  var d = new Date()
  d.setTime(d.getTime() + (exmin * 60 * 1000))
  var expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}
// 获取cookie
export function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) { return c.substring(name.length, c.length) }
  }
  return ''
}

export function delCookie (cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}
