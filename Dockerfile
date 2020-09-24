FROM node:lts

MAINTAINER Hiago dos Santos

COPY . /application

WORKDIR /application

RUN npm i
RUN npm run build

ENTRYPOINT npm start
