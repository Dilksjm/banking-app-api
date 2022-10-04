FROM node:16

WORKDIR /usr/src/app

COPY ./lib ./lib

CMD ["node", "./lib/index.js"]
