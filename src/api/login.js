import axios from './axios'

export const login = data => {
  return axios.request({
    url: '/login',
    method: 'post',
    data
  })
}

export const test = () => {
  return axios.request({
    url: '/test',
    method: 'get'
  })
}