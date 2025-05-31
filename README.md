compose.yml
```yaml
services:
  app:
    image: yorrickbao/openai-proxy-server:latest
    container_name: openai-proxy-server
    ports:
      - "18080:8080"
    env_file: ".env"
    restart: unless-stopped
```

.env
```
# required
HTTPS_PROXY=http://username:password@127.0.0.1:7890
# optional, default: https://api.openai.com
TARGET_URL=
# optional, default: false
ENABLE_TLS=true
# optional, example: /etc/letsencrypt/live/xxx.com/privkey.pem
TLS_KEY_FILE=
# optional, example: /etc/letsencrypt/live/xxx.com/fullchain.pem
TLS_CERT_FILE=
```

Run `docker compose up -d`
