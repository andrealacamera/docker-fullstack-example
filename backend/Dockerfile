FROM node:19-alpine3.17

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


ARG PORT=3213
ENV APP_PORT=${PORT}
EXPOSE $PORT

CMD ["node", "server.js"]

