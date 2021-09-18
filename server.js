const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080;
const connectDB = require('./server/database/connection');

app.use( express.static( __dirname + "public" ) );

// log requests
app.use(morgan('tiny'));
connectDB();
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "public/assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "public/assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "public/assets/js")))

app.use('/', require('./server/routes/router'));

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});
