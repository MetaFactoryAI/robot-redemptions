module.exports = {
  transpileDependencies: ['@ethereumjs/util', '@noble/curves', 'micro-ftch'],
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: '.'
    },
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
};
