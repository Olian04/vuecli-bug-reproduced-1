module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('comlink')
      .test(/\.worker\.ts$/i)
      .use('comlink-loader')
      .loader('comlink-loader')
      .tap(options => {
        return {
          singleton: true
        }
      })
      .end()
  }
}
