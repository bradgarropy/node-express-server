const bodyparser = require("body-parser");
const express    = require("express");
const weight     = require("./routes/weight");
const index      = require("./routes/index");


// create application
const app = express();


// pretty json
app.set("json spaces", 4);


// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded( {extended: true} ));


// index routes
app.use("/", index);

// weight routes
app.use("/api/weight", weight);


// start application
const port = 3000;
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
