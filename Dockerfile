FROM node:10-alpine

WORKDIR /app

ENV PORT=3000
EXPOSE 3000

ENV TZ=America/Sao_Paulo

COPY ["package.json", "./"]
RUN npm install --production

COPY . .

CMD ["node", "./app.js"]
