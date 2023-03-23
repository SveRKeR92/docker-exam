FROM node:18-alpine

WORKDIR /app
VOLUME /app/src

COPY package.json package-lock.json ./

RUN npm install

#COPY index.js db.config.js ./

#ENTRYPOINT ["node", "index.js"]
ENTRYPOINT ["npm", "run", "start"]