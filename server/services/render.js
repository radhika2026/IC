const axios = require('axios');

exports.homeRoutes = (req, res) => {
      res.render('index');
}
exports.regStudent = (req, res)=>{
  res.render("regStudent");
}

exports.regParents = (req, res)=>{
  res.render("regParents");
}

exports.loginStudent =(req, res)=>{
  res.render("loginStudent");
}

exports.loginParents =(req, res)=>{
  res.render("loginParents");
}
