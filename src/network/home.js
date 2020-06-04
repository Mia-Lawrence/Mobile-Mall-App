import { request } from './axios'
import jsonp from './jsonp'

export function getHomeMultiList () {
  return request({
    url: '/home/multidata'
  })
}

export const getHomeRecommend = (page = 1, psize = 10) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  }
  return jsonp(url, params, {
    param: 'callback'
  }).then(value => {
    if (value.code === '200') {
      return value
    }
    throw new Error('没有成功获取到热卖推荐数据!')
  }).catch(reason => {
    console.log(reason)
  })
}
