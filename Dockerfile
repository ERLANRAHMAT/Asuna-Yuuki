FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  python\
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install -g pm2

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
