const pxtorem = require('postcss-pxtorem');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const vantTheme = path.resolve(__dirname, './src/assets/style/vant-theme.less');

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve('src'),
          use: [
            {
              loader: 'thread-loader',
              options: {
                workers: 4
              }
            }
          ]
        }
      ]
    },
    plugins: [new Dotenv()]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue({ file }) {
              if (
                file &&
                (file.includes('/vant/') ||
                  file.includes('\\vant\\') ||
                  file.includes('vxe-table') ||
                  file.includes('ui-common/') ||
                  file.includes('ui-common\\'))
              ) {
                return 37.5;
              } else {
                return 75;
              }
            },
            unitPrecision: 4, // 保留小数位
            propList: ['*'],
            // selectorBlackList: [''], //过滤的类名
            replace: true, // 默认直接替换属性
            mediaQuery: false,
            minPixelValue: 6 // 所有小于设置的样式都不被转换
          })
        ]
      },
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${vantTheme}";`
          }
        }
      }
    }
  },
  devServer: {
    port: 8080,
    disableHostCheck: true,
    progress: false,
    proxy: {
      '/pamirs': {
        // 支持跨域
        changeOrigin: true,
        target: 'http://192.168.0.0:8080/'
      }
    }
  }
};
