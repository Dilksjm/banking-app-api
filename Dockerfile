FROM node:16

WORKDIR /usr/src/app

COPY ./lib ./lib

EXPOSE 8080

CMD ["node", "./lib/index.js"]
