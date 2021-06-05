import axios from 'axios'
import {
  Message
} from 'element-ui'

const server = axios.create({
  baseURL: 'http://localhost:1018',
  timeout: 15000
})

server.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

server.interceptors.response.use(res => {
  const {
    msg,
    code
  } = res.data;
  if (code !== 0) {
    Message.error(msg);
  } else {
    return res.data;
  }
}, error => {
  return Promise.reject(error)
})

export default server