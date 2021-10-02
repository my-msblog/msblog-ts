// vue.config.js
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'msblog'; // vue html title
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
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    public: '127.0.0.1:5477',
    disableHostCheck: true,
    host: 'localhost',
    port: 5477, // 启动端口
    open: true, // 启动后是否自动打开网页
    https: false,
    proxy: {
      '/api': { // '/back-stsem-php-api' 可以自己修改
        target: 'http://127.0.0.1:8080', // 接口域名
        changeOrigin: true, // 是否跨域
        secure: false,
        pathRewrite: {
          '^/api': '' // 需要rewrite重写的,
        }
      }
    }
  }
};
