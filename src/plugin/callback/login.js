import { storageKey } from '../http/config'
export default data => {
  if (data.success) {
    localStorage.setItem(storageKey.token, data.data.token)
    localStorage.setItem(storageKey.uid, data.data.uid)
  }
}
