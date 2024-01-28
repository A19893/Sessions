const { ValidationError } = require("../libs/errors");
const { user_model, session_model } = require("../models");

exports.create_user = async (req, res) => {
  const { username, password, email,ip='172.168.12.1',maxAge= 24 * 60 * 60 * 1000 } = req.body;
  const existing_User = await user_model.findOne({ email: email });
  if (existing_User) throw new ValidationError("Email already Exists!");
  const new_User = new user_model({
    username,
    password,
    email,
  });
  const created_user = await new_User.save();
  // const new_Session= new session_model({
  //     ip_address: ip,
  //     userId: created_user.uuid, 
  // })
  // await new_Session.save();
  // const sessUser = created_user.uuid;
  // req.session.user = sessUser;
  // req.session.cookie.maxAge = maxAge;
  // console.log(req.session)
  return created_user;
};

exports.login_user = async (req,res) => {
  const { password, email,maxAge= 60 * 60 * 1000 } = req.body;
  const exisitng_user = await user_model.findOne({ email: email });
  if (!exisitng_user) throw new ValidationError("Email not Exists!");
  if(exisitng_user.password!==password) throw new ValidationError("Password InCorrect!")
  const sessUser = exisitng_user.uuid;
  req.session.user = sessUser;
  req.session.cookie.maxAge = maxAge;
  console.log(req.session)
  return  exisitng_user;
};

exports.get_sessions = async() =>{
    const sessions = await session_model.find();
    return sessions;
}

exports.logout_user =  async(req,res) =>{
    try{
        req.session.destroy();
        console.log(req.session)
        return {message:"Logout Successfully"}
    }
    catch(err){
        throw err;
    }
}
/* Session {
  cookie: {
    path: '/',
    _expires: 2024-01-23T08:53:02.611Z,
    originalMaxAge: 600000,
    httpOnly: true
  },
  user: '9e46721e'
}
*/
