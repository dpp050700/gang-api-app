import ZGRequest from '@zg/request'
import baseConfig from './config'
import { AID } from './contants'
import callbackList from '@/plugin/callback/index'

import { getLocalStorage } from './utils'

let callback = null

const request = ZGRequest(baseConfig)

request.interceptor.request.use(request => {
  // 解构，防止污染源数据
  const body = { ...(request.body || {}) }
  if (request.signature) {
    body._aid = AID
    body._tk = getLocalStorage('token')
    body._uid = getLocalStorage('uid')
    body._tenantid = '21'
    body._domid = 2000
    request.body = body
  }
  return request
})

request.interceptor.response.use(response => {
  return response
})

// 二次封装请求
async function httpRequest(key, name, data, config) {
  // 获取返回结果
  let response = await request[key](name, data, config)
  callback = callbackList[name]
  if (callback) {
    callback(response)
  }
  return response
}

export default httpRequest
