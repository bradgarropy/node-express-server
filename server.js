const bodyparser = require("body-parser");
const express    = require("express");
const weight     = require("./routes/weight");
const index      = require("./routes/index");


// create application
const app = express();


// pretty json
app.set("json spaces", 4);


// middleware
let bp_json = bodyparser.json();
let bp_urlencoded = bodyparser.urlencoded( {extended: true} );
app.use(bp_json);
app.use(bp_urlencoded);


// index routes
app.use("/", index);

// weight routes
app.use("/api/weight", weight);


// start application
const port = 3000;
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
