FROM node:20-bookworm as build

WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build:prod
EXPOSE 3000

CMD ["npm", "run", "start:prod"]