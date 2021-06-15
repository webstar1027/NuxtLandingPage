import axios from 'axios'
import config from '@/config'
import bus from '@/services/bus'
// import { jwtInjector } from './interceptors/'

axios.defaults.baseURL = config.api_url
let token = null
if(process.browser){
  token = localStorage.getItem(config.token)
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
if (token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`

}

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

axios.defaults.headers.get['Accept-Language'] = 'en'


export function requestTransformer (request) {
  bus.$emit("loader/start");
  return request
}


export function responseTransformer (response) {
  bus.$emit("loader/stop");

  return response ? response.data : null
}

export function errorTransformer (error, { showMessage = false } = {}) {
  const errorCodeArray = error.response.data.errors ? error.response.data.errors : null
  const errorMessage = error.response ? error.response.data : error
  const statusCode = errorMessage ? errorMessage.status_code : null

  if (errorCodeArray && showMessage && statusCode !== 401 && typeof errorCodeArray !== 'string') {
    let multipleErrors = ''

    Object.keys(errorCodeArray).map(errorKey => {
      errorCodeArray[errorKey].map(singleError => {
        multipleErrors += `${singleError} \n\r`
      })
    })

    bus.$emit('error-notification/show', { error: multipleErrors })
  }

  if (showMessage && statusCode !== 401 && typeof errorCodeArray === 'string') {
    bus.$emit('error-notification/show', { error: errorMessage.message })
  }
  bus.$emit("loader/stop");

  throw errorMessage
}

export function extractData (response) {
  return response && response.data
}

export function paramsTransformer (params) {
  let param = "?"
  if (params) {
      for (let i = 0; i < params.length; i++) {
          let keyName = Object.keys(params[i])
          let keyVal = params[i][keyName]
          if (params.length - i > 1) {
              param += `${keyName}=${keyVal}&`
          } else {
              param += `${keyName}=${keyVal}`
          }

      }
  } else {
      param = ''
  }
  return param
}
