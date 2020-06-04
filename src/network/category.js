import { newAxios, CancelToken, isCancel } from './axios'
import { SUCC_CODE } from './config'

let cancel

// 获取内容数据--axios
export const getCategoryContent = (id) => {
  cancel && cancel('取消了前一次的请求！')
  cancel = null
  return newAxios(id, {
    cancelToken: new CancelToken(function executor (c) {
      cancel = c
    })
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data.content
    }

    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    // console.log(err)
    // 判断是否取消了前一次的请求
    if (isCancel(err)) {
      console.log(err)
    } else {
      // handle error
      console.log(err)
    }
  })
}
