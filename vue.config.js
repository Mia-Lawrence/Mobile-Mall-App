module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'js': '@/js'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Mobile-Mall-App/'
    : '/'
}