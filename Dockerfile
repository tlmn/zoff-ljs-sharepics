FROM node:14 as builder

WORKDIR /opt/sharepic-generator
COPY src src
COPY static static
COPY tailwind.config.js .
COPY postcss.config.js .
COPY package.json .
COPY gatsby-browser.js .
COPY gatsby-config.js .

ENV GATSBY_API_URL=http://sharepics_api:3000

RUN ls -al

RUN npm install

RUN node_modules/.bin/gatsby telemetry --disable && node_modules/.bin/gatsby build

FROM nginx

COPY --from=builder /opt/sharepic-generator/public/ /usr/share/nginx/html/
