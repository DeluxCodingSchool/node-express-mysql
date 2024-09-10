const express = require("express");
const { register } = require("../controller/authController");
const { checkUserExists } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", checkUserExists, register);

module.exports = router;
