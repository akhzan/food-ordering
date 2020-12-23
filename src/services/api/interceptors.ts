import { AxiosError } from 'axios'
import { notification } from 'antd'

import LANG from 'config/lang/http-error'

const notify = (desc: string, msg = LANG.HTTP_ERROR) => {
  notification.error({
    message: msg,
    description: desc,
  })
}

export const errorInterceptor = (err: AxiosError): Promise<never> => {
  const { response } = err
  if (response) {
    const { status, data } = response
    if (status === 401) {
      notify(LANG.HTTP_LOGIN_ERROR)
    } else if (status === 401) {
      notify(LANG.HTTP_SESSION_EXPIRED)
    } else if (status === 403) {
      notify(LANG.HTTP_UNAUTHORIZED_ACTION)
    } else if (status === 422) {
      let description = data
        ? data.message || data.error
        : LANG.HTTP_UNPROCESSED_REQUEST
      description = description.split('_').join(' ')
      notify(description)
    } else if (status === 500) {
      notify(data.error || LANG.HTTP_INTERNAL_SERVER_ERROR)
    } else {
      const description = data
        ? data.message || data.error
        : LANG.HTTP_UNKNOWN_ERROR
      notify(description)
    }
  } else {
    notify(LANG.HTTP_NETWORK_ISSUE_ERROR, LANG.HTTP_NETWORK_ERROR)
  }
  return Promise.reject(err)
}
