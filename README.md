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
HTTPS_PROXY=http://username:password@127.0.0.1:7890
# optional, default: https://api.openai.com
TARGET_URL=
```

Run `docker compose up -d`
