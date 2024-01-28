const { user_controller } = require("../controllers");
const auth_checker = require("../middlewares/auth_checker");

const router= require("express").Router();

router.post('/', user_controller.create_user)
router.post('/login',user_controller.login_user)
router.get('/sessions',auth_checker,user_controller.get_sessions)
router.get('/',auth_checker,user_controller.logout_user);
module.exports=router;