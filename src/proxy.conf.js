const PROXY_CONFIG = [
  {
    context: '/photos',
    target: 'https://jsonplaceholder.typicode.com',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
];

const setupForCorporateProxy = (conf) => {
  return conf;
};

module.exports = setupForCorporateProxy(PROXY_CONFIG);
