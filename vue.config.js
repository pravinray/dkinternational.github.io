module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dkinternational.github.io/'
    : '/',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
}
