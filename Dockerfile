FROM node:16

WORKDIR /usr/src/app

COPY ./lib .

RUN ls -a

CMD ["node", "./index.js"]
