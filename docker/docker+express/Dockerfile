FROM node:18-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install

COPY --chown=node:node . . 

EXPOSE 8080

CMD ["node", "app.js"]