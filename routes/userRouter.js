const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.post("/googleLogin", UserController.googleLogin)

// router.get('/', UserController.getAllUser)
// router.delete('/:userId', UserController.deleteUser)

module.exports = router;
