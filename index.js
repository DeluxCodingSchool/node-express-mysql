const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

/////Middlewares
// app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

///////ROUTES
app.use("/api/auth", authRoutes);
// app.use("/", (req, res) => {
//   res.send("Welcome to my API!");
// });
app.listen(3030, () => {
  console.log("Server is running on port 3005");
});
