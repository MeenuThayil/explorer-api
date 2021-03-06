FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
EXPOSE 8000
CMD [ "npm", "start" ]