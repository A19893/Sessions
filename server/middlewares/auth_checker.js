
const auth_checker = (req, res, next) => {
  const {user} = req.session;
  if (!user) {
    return res.status(400).json({ msg: " Unauthorized User" });
  } 
  next();
};

module.exports = auth_checker;
