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

const Parentsdb = mongoose.model('parentsdb', schema);

module.exports = Parentsdb;
