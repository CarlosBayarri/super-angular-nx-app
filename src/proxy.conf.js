const PROXY_CONFIG = [
  {
    context: '/photos',
    target: 'https://jsonplaceholder.typicode.com',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;
