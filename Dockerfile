FROM node:9.4.0-alpine

COPY . /frontend
WORKDIR /frontend

RUN npm i && npm run build
CMD ["npm", "start"]

EXPOSE 3000
