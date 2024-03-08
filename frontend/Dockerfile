FROM node:18-alpine

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY public ./public/
COPY src ./src/

RUN npm install
RUN pwd
RUN ls
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]