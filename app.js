const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { HttpsProxyAgent } = require('https-proxy-agent');

const proxy = createProxyMiddleware({
  target: process.env.TARGET_URL || 'https://api.openai.com',
  changeOrigin: true,
  agent: new HttpsProxyAgent(process.env.HTTPS_PROXY),
});

const server = http.createServer((req, res) => {
  proxy(req, res);
});

server.listen(8080);
