const baseConfig = {
  baseURL: `//api.zhaogangmit.com/web.api`, // 请求基地址
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  signature: true,
  staticURL: true,
  apiKey: '_mt',
  parseJson: true,
  timeout: 15000, // 超时时间
  withCredentials: true,
  retry: true, // todo
  retryCount: 5, // todo
  retryInterval: 2000 // todo
}

export const storageKey = {
  token: '_api_tk',
  uid: '_api_uid',
  tenantid: '_api_tenantid'
}

export default baseConfig
