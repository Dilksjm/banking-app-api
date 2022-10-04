FROM node:16

WORKDIR /usr/src/app

COPY ./lib ./lib
COPY ./node_modules ./node_modules

CMD ["node", "./lib/index.js"]
