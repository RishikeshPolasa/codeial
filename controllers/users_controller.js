module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "user",
  });
};

const User = require("../models/user");

//render the sign up
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codeial | sign Up",
  });
};

//render the sing in
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codeial | sign In",
  });
};

//get the signUp data

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user in while signing up");
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

//sign in and create session for the user

module.exports.createSession = function (req, res) {
  //todo later
};
