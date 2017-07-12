const express = require("express");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const path = require("path");
const router = require("./routes/router.js");

//Express App Initialization
const app = express();
//Public Directory Setup
app.use("/public", express.static(path.join(__dirname, "public")));
//Mustache View Engine
app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
//Express Session Initialization
app.use(session({
  secret: "1412(>@52356 3w7s$^#%&^",
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
