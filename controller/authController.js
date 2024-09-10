//register
// login
//forget password
//reset password
const express = require("express");
const db = require("../config/db");

// User registration

exports.register = (req, res) => {
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

  res.status(201).send({
    success: true,
    message: "User registered successfully",
    data: {
      first_name,
      last_name,
      email,
      phone,
    },
  });
};

// User login
