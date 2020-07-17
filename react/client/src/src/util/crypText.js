import {MD5} from 'crypto-js'
const key = 'ko2Ckji@#iivl*ler=Ww32+leo#qq=eTIwq683='

// 加密密码
export const crypPassword = (password) => {
    return MD5(key + password).toString()
}

