import jsonP from './jsonp'
// import { jsonpOptions } from './config'

export const getProductDetail = id => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/'
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017@taobao_h5_6.6.0',
    data: `{"itemNumId":"${id}"}`,
    appKey: 12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: '6.0'
  }

  // jsonpOptions.timeout = 100;

  return jsonP(url, params, {
    param: 'callback',
    timeout: 10000
  }).then(res => {
    res = res.data
    // console.log(res)

    if (res.apiStack && res.item) {
      // 将json格式的数据转换成对象
      const apiStack = JSON.parse(res.apiStack[0].value)
      // console.log(apiStack)

      // 整理API接口，挑选出需要的数据
      var data = {}

      data.content = {}
      data.content.priceText = apiStack.price.price.priceText
      data.content.soldCount = apiStack.vertical.jhs.soldCount
      data.content.title = apiStack.item.title
      data.content.postage = apiStack.delivery.postage
      data.content.sellCount = apiStack.item.sellCount
      data.content.from = apiStack.delivery.from

      if (res.rate) {
        data.content.review = {}
        data.content.review.totalCount = res.rate.totalCount
        data.content.review.keywords = res.rate.keywords || []
        data.content.review.rateList = res.rate.rateList || []
      }

      if (res.seller) {
        data.content.seller = {}
        data.content.seller.shopIcon = res.seller.shopIcon
        data.content.seller.shopName = res.seller.shopName
        data.content.seller.creditLevelIcon = res.seller.creditLevelIcon
        data.content.seller.evaluates = res.seller.evaluates
      }

      data.slider = res.item.images

      return data
    }

    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  })
  // .then(res => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(res)
  //     }, 500)
  //   })
  // })
}
