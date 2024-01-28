const session = require("express-session");
const Redis = require("ioredis");
const RedisStore = require("connect-redis").default;
exports.redisClient = new Redis();

module.exports = session({
    name:"sessionId",
    secret: process.env.SECRET_KEY,
    credentials: true,
    store: new RedisStore({ client: exports.redisClient }), //This is the user's session information
    resave: false,
    saveUninitialized: false,
}) 