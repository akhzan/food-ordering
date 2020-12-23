const NODE_ENV_RELEASE = 'production'
export const PUBLIC_URL =
  process.env.NODE_ENV === NODE_ENV_RELEASE ? process.env.PUBLIC_URL : ''
export const API_URL = process.env.REACT_APP_API
