## Node.js MongoDB & GraphQL & Redis Boilerplate

The node.js environments are following.
* Node.js v14.15.4
* MongoDB v4.4.1
* Redis v6.0.8

## How to install

```
git clone https://github.com/mash-up-kr/Boilerplate_MongoDB_GraphQL_Redis.git
cd ./Boilerplate_MongoDB_GraphQL_Redis
npm install
npm run start
```

with docker
```
git clone https://github.com/mash-up-kr/Boilerplate_MongoDB_GraphQL_Redis.git
cd ./Boilerplate_MongoDB_GraphQL_Redis
docker-compose build
docker-compose up -d
```

## .env settings

Change root directory .env.default file to following.
* .env.development -> npm run start
* .env.production -> npm run deploy
* .env.test -> npm run testdb

.env.default contents are following.

```
# Change to .env.{development | production | test} file
EXPRESS_PORT=express server port
APOLLO_PORT=apollo server port
REDIS_DEFAULT=redis master host
REDIS_DEFAULT_PORT=redis master port
REDIS_READONLY=redis readonly host
REDIS_READONLY_PORT=redis readonly port

MONGODB_ID=mongodb id
MONGODB_PASSWORD=mongodb password
MONGODB_IP=mongodb ip
MONGODB_PORT=mongodb port
MONGODB_AUTHENTICATION_DB=mongo db authentication database name
```

## Contributors
* [kor-Chipmunk](https://github.com/kor-Chipmunk)
* [batboy118](https://github.com/batboy118)
* [nari1021](https://github.com/nari1021)