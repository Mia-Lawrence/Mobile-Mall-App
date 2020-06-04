// // 引入jsonp插件
// import jsonp from 'jsonp'

// // 将对象转为查询字符串形式：{key:1,pp:2} => key=1&pp=2
// const parseParam = (data) => {
//   const arr = []
//   // 1. 需要使用数字的join方法，把对象转为数组
//   for (const key in data) {
//     arr.push([key, data[key]])
//   }
//   // // [[key,1], [pp,2]] => [key=1, pp=2]
//   return arr.map(item => item.join('=')).join('&')
// }

// export default (url, data, options) => {
//   // 如果没有问号要加上问号，有了直接加&符号连接
//   url += (url.indexOf('?') === -1 ? '?' : '&') + parseParam(data)
//   // 返回promise对象，方便外部调用方法后，使用then接收数据
//   return new Promise((resolve, reject) => {
//     // err是错误信息，data是成功后返回的数据
//     jsonp(url, options, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

import jsonp from 'jsonp'

const parseParam = param => {
  const params = []

  for (const key in param) {
    params.push([key, encodeURIComponent(param[key])])
  }
  return params.map(value => value.join('=')).join('&')
}

export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data)

  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
