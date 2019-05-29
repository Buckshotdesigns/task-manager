// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("members");
    }
    
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    
    if (req.user) {
      res.redirect("members");
    }
   
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    
    if (req.user) {
      res.redirect("members");
    }
   
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    //make api call to tasks and store it in varaiable
    db.Tasks.findAll({
      where: {UserId: req.user.id}
    }).then(function(data){
      res.render("members", {tasks_data: data});
    })
    console.log(req.user.id);
  
    });
  };


