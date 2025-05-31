const { createProxyMiddleware } = require('http-proxy-middleware');
const { HttpsProxyAgent } = require('https-proxy-agent');

const proxy = createProxyMiddleware({
  target: process.env.TARGET_URL || 'https://api.openai.com',
  changeOrigin: true,
  agent: new HttpsProxyAgent(process.env.HTTPS_PROXY),
});
const enableTLS = process.env.ENABLE_TLS === 'true';
const port = process.env.PORT || 8080;

(enableTLS
  ? require('https').createServer({
      key: require('fs').readFileSync(process.env.TLS_KEY_FILE),
      cert: require('fs').readFileSync(process.env.TLS_CERT_FILE),
    })
  : require('http').createServer()
)
  .on('request', (req, res) => proxy(req, res))
  .listen(port, () => {
    console.log(`${enableTLS ? 'https' : 'http'} proxy server listening on port ${port}`);
  });
