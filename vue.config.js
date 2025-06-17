module.exports = {
  outputDir: 'dist/public',
  publicPath: './',

  pwa: {
    // name: "qb-web",
    themeColor: "#4d8ad5",
    msTileColor: "#4d8ad5",
    mobileWebAppCapable: 'yes',

    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: null,
      msTileImage: null,
    },
  },

  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://192.168.2.10:8080',
      },
    },
  },
  configureWebpack(config) {
    config.resolve.fallback = {
      path: false,
    }
  },
  chainWebpack(config) {
    config.plugin('define').tap(args => {
      let arg = args[0]
      arg = {
        ...arg,
        'process.env.GIT_TAG': JSON.stringify(process.env.GIT_TAG),
      }

      return [arg]
    })
  },
};
