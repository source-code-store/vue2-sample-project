const path = require("path");
const { defineConfig } = require('@vue/cli-service');

const nodeEnv = process.env.NODE_ENV;
const isDevelopment = nodeEnv === "development",
  isProduction = nodeEnv === "production";

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  productionSourceMap: false,
  publicPath: process.env.BASE_URL,
  configureWebpack: (config) => {
    if (isProduction) {
      /**
       * 页面引用 vue, vue-router, vuex JS
       */
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
      };
    }

    config.output.filename = "[name].[contenthash].js";
    config.output.chunkFilename = (pathData) => {
      return `chunk.${pathData.chunk.hash}-[contenthash].js`;
      // return `${pathData.chunk.runtime || "code"}.${pathData.chunk.hash}-[contenthash].js`;
    };

    if (isDevelopment) {
      config.devServer = {
        allowedHosts: "all",
        /**
         * !!! 注意 !!!
         * 如果要修改端口号, 请修改本地文件 .env.local 的 PORT 值
         */
        port: process.env.PORT || 5002,
        /**
          * !!! 注意 !!!
          * 如果要修改代理地址, 请修改本地文件 .env.local 的 VUE_APP_DOMAIN_XXXX 值,
          * 不要直接修改本文件的 proxy 配置节日.
          */
        proxy: {
          "/api": {
            changeOrigin: true,
            target: process.env.VUE_APP_DOMAIN_API
          }
        },
      };
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, './src'));
    // 去掉 chunk-vendors 和 chunk-commons
    config.optimization.delete("splitChunks");
  },
  pages: {
    'demo/dynamic-component': {
      entry: 'src/pages/demo/dynamic-component/[entry].js',
      template: 'public/index.html',
      filename: 'demo/dynamic-component.html',
      title: undefined,
      inject: 'body',
      scriptLoading: 'defer',
      userExtraData: {
        htmlHeader: '<script>\n  console.log("hello world.");\n</script>',
        htmlBody: '',
        assets: null
      }
    },
    'demo/my-full-entry-page': {
      entry: 'src/pages/demo/full-entry-config/[entry].js',
      template: 'public/index.html',
      filename: 'demo/my-full-entry-page.html',
      title: 'HTML页面的标题',
      inject: 'body',
      scriptLoading: 'defer',
      userExtraData: { htmlHeader: '', htmlBody: '', assets: null },
      publicPath: './'
    },
    'demo/typescript-sample': {
      entry: 'src/pages/demo/typescript-sample/[entry].js',
      template: 'public/index.html',
      filename: 'demo/typescript-sample.html',
      title: undefined,
      inject: 'body',
      scriptLoading: 'defer',
      userExtraData: { htmlHeader: '', htmlBody: '', assets: null },
    },
    'demo/vue-cli-sample': {
      entry: 'src/pages/demo/vue-cli-sample/main.ts',
      template: 'public/index.html',
      filename: 'demo/vue-cli-sample.html',
      title: undefined,
      inject: 'body',
      scriptLoading: 'defer',
      userExtraData: { htmlHeader: '', htmlBody: '', assets: null },
    }
  }
})
