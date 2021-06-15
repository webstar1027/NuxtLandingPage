import bus from '@/services/bus'
import store from '@/store'
import { refreshToken as apiRefreshToken } from '@/services/api/user'
import {
  isTokenExpired,
  isTokenRefreshRequest,
  onTokenRefreshed
} from '@/services/token'

export function refreshToken (config) {
  return new Promise((resolve, reject) => {
    const token = store.getters.token
    if (token && isTokenExpired(token) && !isTokenRefreshRequest(config)) {
      bus.$emit('queue-request', config)
      return apiRefreshToken()
        .then(onTokenRefreshed)
        .then(token => {
          store.dispatch('setToken', { token })
        })
        .then(() => {
          resolve(config)
        })
        .catch(error => {
          bus.$emit('logout')
          Promise.reject(error)
        })
    } else {
      resolve(config)
    }
  })
}
