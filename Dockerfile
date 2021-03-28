FROM node:lts-alpine as builder
# env set
ENV EVA_ENTRYPOINT=/api

WORKDIR /
ADD package.json /
RUN npm install
RUN npm run build

FROM nginx:alpine
LABEL maintainer="*********@gmail.com"
ADD nginx.conf /etc/nginx/
ADD  /build/ /usr/share/nginx/html/
EXPOSE 80