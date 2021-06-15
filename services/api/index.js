import http from 'axios'
import { requestTransformer, responseTransformer, errorTransformer } from '@/services/http'

export function getTopPros() {
  return http
    .get(requestTransformer('/users/top/pros'))
    .then(responseTransformer)
    .catch(error => errorTransformer(error, { showMessage: true }))
}