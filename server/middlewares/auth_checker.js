const { redisClient } = require("./session");

const auth_checker = (req, res, next) => {
 redisClient.keys("sess:*", function(error, keys) {
    if (error) {
        console.error("Error fetching session keys:", error);
        return;
    }
    console.log("Number of active sessions:", keys.length);
    console.log("Session keys:", keys);
});
  const {user} = req.session;
  if (!user) {
    return res.status(400).json({ msg: " Unauthorized User" });
  } 
  next();
};

module.exports = auth_checker;
