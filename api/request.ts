import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 5000,
})

//拦截器: 统一处理code和message
instance.interceptors.response.use(res => {
  const resData: ResponseType = (res.data || {}) as ResponseType
  const { code, msg, data = {} } = resData

  if (code !== 0) {
    // 错误提示
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data as any
})

export type ResponseType = {
  code: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export default instance
