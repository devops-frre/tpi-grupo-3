FROM node:12.13.1

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
EXPOSE 3000
CMD ["yarn", "start:full"]