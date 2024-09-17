const express = require("express");
const { register, login } = require("../controller/authController");
const { checkUserExists } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", checkUserExists, register);
router.post("/login", login);

module.exports = router;
