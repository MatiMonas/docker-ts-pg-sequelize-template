FROM node:16-alpine as development
WORKDIR /enviamelo-challenge
COPY package*.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine as production
WORKDIR /enviamelo-challenge
COPY package*.json .
COPY ./yarn.lock ./
RUN yarn install --production
COPY ./yarn.lock ./
COPY --from=builder ./enviamelo-challenge/dist ./dist
EXPOSE 3001
CMD [ "node", "dist/index.js" ]