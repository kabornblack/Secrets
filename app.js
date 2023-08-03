const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

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

const userSchema = {
  email: String,
  passWord: String,
  repassWord: String
};

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
  const newUser = new User ({
    email: req.body.email,
    passWord: req.body.password,
    repassWord: req.body.repassword
  });
  newUser.save()
  .then((registered) => {
    res.render("secrets");
  })
  .catch ((err) => {
    res.send(err);
  })
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
