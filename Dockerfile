FROM node:14.16.0-slim

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

CMD yarn start
