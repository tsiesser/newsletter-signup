const sassModuleRegex = /\.scss$/;

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: sassModuleRegex,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 2,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        require.resolve('sass-loader'),
      ]
    }
  );

  return defaultConfig;
};
