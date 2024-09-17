const User = require("../model/user");

const users = ["isaac@gmail.com", "james@gmail.com", "johndoe@gmail.com"];
exports.checkUserExists = async (req, res, next) => {
  console.log(req.body);
  const { email } = req.body;
  const user = await User.findUserByEmail(email);

  if (user.length > 0) {
    return res.status(400).send({ message: "Email already exists" });
  }
  return next();
};
