require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const dbURI = "mongodb://127.0.0.1:27017/userDB";

mongoose.connect(dbURI, {
  useNewUrlParser: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.post("/register", function(req, res) {
  // Hash the user's password using bcrypt
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (err) {
      res.send(err);
    } else {
      const newUser = new User({
        email: req.body.username,
        password: hash
      });
      newUser.save()
        .then((registeredUser) => {
          res.render("secrets"); // Render the "secrets" page upon successful registration
        })
        .catch((err) => {
          res.send(err); // Handle any error that occurs during registration
        });
    }
  });
});

app.post("/login", function(req, res) {
  const email = req.body.username;
  const password = req.body.password;

  User.findOne({ email: email })
    .then(foundUser => {
      if (foundUser && foundUser.password === password) {
        res.render("secrets");
      } else {
        res.send("Invalid credentials. Please try again.");
      }
    })
    .catch(err => {
      res.send(err);
    });
});














app.listen(3000, function() {
  console.log("Server started on port 3000");
});
