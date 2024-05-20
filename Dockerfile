ARG NODE_VERSION=18.20.2

FROM node:${NODE_VERSION}-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
# CMD ["node", "dist/main"]
