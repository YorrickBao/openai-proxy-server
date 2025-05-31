FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app
COPY . .
RUN npm install

USER root
EXPOSE 8080
CMD ["node", "app.js"]
