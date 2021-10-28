// vue.config.js
const path = require('path');
const webpack = require('webpack');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  outputDir: 'dist',
  assetsDir: 'assets',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    config.resolve.symlinks(true);
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE; // vue html title
        return args;
      });
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'));
  },
  devServer: {
    compress: true,
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT, // 启动端口
    // hot: true,
    // open: true, // 启动后是否自动打开网页
    https: false,
    proxy: {
      '/api': { // '/api' 可以自己修改
        target: process.env.VUE_APP_BASE_URL, // 接口域名
        changeOrigin: true, // 是否跨域
        secure: false,
        pathRewrite: {
          '^/api': '' // 需要rewrite重写的,
        }
      }
    }
  }
};
