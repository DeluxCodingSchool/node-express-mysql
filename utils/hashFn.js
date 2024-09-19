const bcrypt = require("bcryptjs");
const hashFn = async (value) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(value, salt);

  return hash;
};

const comparePasswords = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
module.exports = { hashFn, comparePasswords };
