FROM node:14-alpine

USER root
RUN apk add git \
    && git clone https://github.com/bresnow/studious-dollop.git /app

WORKDIR /app
RUN yarn install 

CMD ["yarn", "start"]
