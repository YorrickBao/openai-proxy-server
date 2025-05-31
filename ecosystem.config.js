module.exports = {
  apps: [
    {
      name: 'openai-proxy-server',
      script: 'app.js',
      env: {
        NODE_ENV: 'production',
      }
    }
  ]
};
