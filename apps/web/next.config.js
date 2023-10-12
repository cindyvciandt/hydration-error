module.exports = {
  swcMinify: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  experimental: {
    forceSwcTransforms: true,
    esmExternals: false,
  },
  webpack: (config) => {
    if (config?.module?.rules) {
      config.module.rules = config.module.rules.map(rule => {
        if (rule.test?.source?.includes('m?js')) {
          return {
            test: /\.mjs$/,
            type: 'javascript/auto',
            resolve: {
              fullySpecified: false,
            },
          };
        }
        return rule;
      });
    }
    return config
  }
};
