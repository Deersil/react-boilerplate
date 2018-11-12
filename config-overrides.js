const { paths } = require('react-app-rewired');

const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');

module.exports = function override(config, env) {
  let newConfig = config;
  newConfig = rewireAliases.aliasesOptions({
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
  })(newConfig, env);
  newConfig = rewireAliases.aliasesOptions({
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
  })(newConfig, env);
  newConfig = rewireAliases.aliasesOptions({
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
  })(newConfig, env);
  newConfig = rewireAliases.aliasesOptions({
    '@containers': path.resolve(__dirname, `${paths.appSrc}/containers/`),
  })(newConfig, env);
  newConfig = rewireAliases.aliasesOptions({
    '@constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
  })(newConfig, env);
  newConfig = rewireAliases.aliasesOptions({
    '@history': path.resolve(__dirname, `${paths.appSrc}/history`),
  })(newConfig, env);
  newConfig = rewireAliases.aliasesOptions({
    '@schemas': path.resolve(__dirname, `${paths.appSrc}/schemas`),
  })(newConfig, env);
  return newConfig;
};
