import createRequestMethod from './createRequestMethod'

const methods = ['get', 'post']
const http = {}
methods.forEach(key => {
  http[key] = createRequestMethod(key)
})
const get = http.get
const post = http.post
export { get, post }
export default http
