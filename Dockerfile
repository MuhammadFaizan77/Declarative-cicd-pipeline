FROM node:latest

WORKDIR /app

COPY  package.json package-lock.json / 

RUN npm install 

COPY . ./

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
