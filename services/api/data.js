import http from 'axios'
import { requestTransformer, responseTransformer, errorTransformer } from '@/services/http'

export function getData (data) {
    let request = `data`
    return http
      .get(requestTransformer(request), data)
      .then(responseTransformer)
      .catch(error => errorTransformer(error, { showMessage: true }))
}