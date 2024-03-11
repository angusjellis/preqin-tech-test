FROM node:18-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY src ./src
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY public ./public
COPY . ./

RUN npm install --maxsockets 1
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
