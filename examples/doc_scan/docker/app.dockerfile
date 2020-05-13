FROM node:12-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add openssl git

ARG VERSION=master

RUN git clone -b ${VERSION} --single-branch --depth 1 https://github.com/davidgrayston/doc-scan-demo.git .

RUN openssl req \
    -x509 \
    -nodes \
    -days 365 \
    -newkey rsa:2048 \
    -keyout /etc/ssl/server.key \
    -out /etc/ssl/server.crt \
    -subj "/C=UK/ST=London/L=London/O=Yoti/OU=Yoti/CN=localhost"

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
