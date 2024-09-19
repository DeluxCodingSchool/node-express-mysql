//register
// login
//forget password
//reset password
const express = require("express");
const db = require("../config/db");
const Auth = require("../model/auth");
const { hashFn, comparePasswords } = require("../utils/hashFn");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

// User registration

exports.register = async (req, res) => {
  console.log("Request body", req.body);
  const { first_name, last_name, email, phone, password, confirm_password } =
    req.body;
  // Ensures all fields are provided
  if (
    !first_name ||
    !last_name ||
    !email ||
    !phone ||
    !password ||
    !confirm_password
  ) {
    return res.status(400).send({
      success: false,
      message: "All fields are required",
    });
  }

  if (password != confirm_password) {
    return res.status(400).send({
      success: false,
      message: "Passwords do not match",
    });
  }
  try {
    const hashedPassword = await hashFn(password);
    const newUser = {
      first_name,
      last_name,
      email,
      phone,
      password: hashedPassword,
      confirm_password,
    };
    const user = await Auth.register(newUser);
    console.log(user);
    res.status(201).send({
      id: user.insertId,
      success: true,
      message: "User registered successfully",
      data: {
        first_name,
        last_name,
        email,
        phone,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // ensure all fields are provided
  if (!email || !password) {
    return res
      .status(400)
      .send({ success: false, message: "All fields are required" });
  }
  //get user from database with email
  const user = await User.findUserByEmail(email);
  console.log("FOUND USER:", user);
  if (user.length === 0) {
    return res.status(404).send({
      success: false,
      message: `User with email (${email}) does not exists`,
    });
  }

  if (await comparePasswords(password, user[0].password)) {
    return res
      .status(200)
      .send({ success: true, message: "User logged in successfully", user });
  } else {
    return res.status(400).send({
      success: false,
      message: `Invalid credentials. Please try again`,
    });
  }
  // Generate JWT token
};

// User login
