const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const router = require("./routes/router.js");

//Express App Initialization
const app = express();
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
//Express Session Initialization
app.use(session({
  secret: "141252356 3w7s$^#%&^",
  resave: false,
  saveUninitialized: false
}));

//Port setup
app.set('port', (process.env.PORT || 3000));

app.use(router);

if (require.main === module){
  app.listen(app.get('port'), function () {
    console.log("server running on localhost:" + app.get('port'));
  });
}
