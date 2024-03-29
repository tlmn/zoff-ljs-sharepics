FROM node:16 as builder

WORKDIR /opt/sharepic-generator
COPY src src
COPY static static
COPY tailwind.config.js .
COPY postcss.config.js .
COPY package.json .
COPY gatsby-browser.js .
COPY gatsby-config.js .

ENV GATSBY_API_URL=https://sharepics-api.bv.linksjugend-solid.de

RUN npm install

RUN node_modules/.bin/gatsby telemetry --disable && node_modules/.bin/gatsby build

FROM nginx

COPY --from=builder /opt/sharepic-generator/public/ /usr/share/nginx/html/
