// 对axios进行封装 目的是减少各个文件对第三方框架的依赖

import axios from 'axios'

// 获取home轮播图数据的axios
export const request = function request (config) {
  // 创建一个axios的实例对象instance
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(result => {
    return result.data.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}

// 获取category数据的axios
export const newAxios = function newAxios (id, params) {

  const categoryInstance = axios.create({
    baseURL: 'http://www.imooc.com/api/category/content/',
    timeout: 10000,
    params
  })
  return categoryInstance.get(id, params)
}

export const CancelToken = axios.CancelToken
export const isCancel = axios.isCancel