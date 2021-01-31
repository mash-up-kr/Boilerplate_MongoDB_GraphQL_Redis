# ./Dockerfile

FROM ubuntu:18.04

RUN apt update
RUN apt install wget -y
RUN apt install curl -y
RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs -y
RUN apt-get install build-essential -y
RUN npm install express -g
RUN npm install express-generator -g
RUN npm install pm2 -g
RUN express /root/expressapp
WORKDIR /root/expressapp/

RUN npm i
RUN npm audit fix