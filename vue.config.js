// vue.config.js
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  outputDir: 'dist',
  assetsDir: 'assets',
  chainWebpack: config => {
    // 加载svg图片
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    // vue html title
    config.resolve.symlinks(true);
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE;
        return args;
      });
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'));
  },
  devServer: {
    compress: true,
    host: process.env.VUE_APP_HOST,
    // 启动端口
    port: process.env.VUE_APP_PORT,
    // 启动后是否自动打开网页
    // open: true,
    https: false,
    proxy: {
      '/api': {
        // 接口域名
        target: process.env.VUE_APP_BASE_URL,
        // 是否跨域
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          // 需要rewrite重写的,
          '^/api': ''
        }
      }
    }
  }
};
