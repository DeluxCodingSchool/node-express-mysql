const db = require("../config/db");

class Auth {
  static register(newUser) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO users (first_name, last_name, email, password,phone) VALUES (?, ?, ?, ?, ?)",
        [
          newUser.first_name,
          newUser.last_name,
          newUser.email,
          newUser.password,
          newUser.phone,
        ],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }


}

module.exports = Auth;
