FROM node:18-alpine
WORKDIR /chatApp/frontend

COPY package*.json ./
RUN npm install
RUN  npm install -g serve
COPY . .
RUN  npm run build
CMD [ "serve" ,"-s" ,"build" ] 