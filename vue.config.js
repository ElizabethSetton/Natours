module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/global/_variables.scss";
              @import "@/styles/global/_mixins.scss";
              @import "@/styles/global/_animations.scss";`
      }
    }
  }
};
