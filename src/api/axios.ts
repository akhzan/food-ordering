import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios'

import { METHODS } from 'api/methods'
import { errorInterceptor } from 'api/interceptors'
import { API_URL } from 'config/env'

const instance = axios.create()
instance.interceptors.response.use((response) => response, errorInterceptor)

export const call = (
  method: Method,
  subUrl = '',
  data: Record<string, any> = {},
): AxiosPromise => {
  const config: AxiosRequestConfig = {
    baseURL: API_URL,
    method,
    url: subUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (method === METHODS.GET) {
    config.params = data
  } else {
    config.data = data
  }
  return instance.request(config)
}
