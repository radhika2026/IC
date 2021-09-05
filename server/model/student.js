const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  email :{
    type : String,
    required: true
  },
  password : {
    type : String,
    required: true
  },
  pnr : {
    type : String,
    required: true
  }
});

const Studentdb = mongoose.model('studentdb', schema);

module.exports = Studentdb;
