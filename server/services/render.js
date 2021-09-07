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

exports.login =(req, res)=>{
  res.render("login");
}
