const PROXY_CONFIG = [
  {
    context: '/photos',
    target: 'http://127.0.0.1:3003',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;
