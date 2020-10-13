import httpRequest from './request'

// 创建请求方法
const createMethod = key => {
  return async (name, data, config = {}) => {
    try {
      // 开始请求
      let response = await httpRequest(key, name, data, config)
      return response
    } catch (error) {
      // 异常抛出错误
      console.log('http error', error)
      return Promise.reject(error)
    }
  }
}

export default createMethod
