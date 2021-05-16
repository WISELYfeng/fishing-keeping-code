/* eslint-disable */ 
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fishKeeping-website/'
    : '/',
  lintOnSave: false,
  chainWebpack:config => {
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()  // 只操作icons目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
      .use('svgo-loader').loader('svgo-loader') // 从这行开始的两行代码是为了解决有些图标不能通过color修改颜色的解决办法
      .tap(options => ({...options,plugins: [{removeAttrs: {attrs:'fill'}}]})).end()

      // loader插件的配置
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}]
    )
    config.module.rule('svg').exclude.add(dir)  // 其他svg-loader排除icons目录
  }
}
