const users = ["isaac@gmail.com", "james@gmail.com", "johndoe@gmail.com"];
exports.checkUserExists = (req, res, next) => {
  console.log(req.body);
  const { email } = req.body;
  if (users.includes(email)) {
    return res.status(400).json({ message: "Email already exists" });
  }
  return next();
};
