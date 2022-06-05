module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    host: '127.0.0.1',
    port: 80,
    proxy: {
      '/ieee': {
        target: 'https://ieeexplore.ieee.org',
        // target: 'https://blog.csdn.net/xkKevin',
        ws: true,
        // secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ieee/(.*)': '/$1',
        },
      },
      '/doi': {
        target: 'https://doi.org',
        // target: 'https://blog.csdn.net/xkKevin',
        ws: true,
        // secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/doi/(.*)': '/$1',
        },
      },
    },
  },
  publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static',
}
