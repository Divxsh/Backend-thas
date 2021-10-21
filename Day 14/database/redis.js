// redis Store
// redis Client - Used for Connection
// Express Session
// npm i express-session redis connect-redis
/* 
const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
	host: "localhost",
	port: 6379,
    client:"redis"
});

redisClient.on('error',(err) => {
    console.log("Could not connect to redis",err);
})

redisClient.on('connect',() => {
    console.log('You are now Connected to redis.');
})


module.exports = {
    redisClient,
    RedisStore,
    session
} */