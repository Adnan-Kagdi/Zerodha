const { signup, login, Logout ,verify } = require("../Controllers/AuthController");
// const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
// router.get("/verify", verify);
// router.post('/logout', Logout );

module.exports = router;