const express = require("express");


// start application
const port = 3000;
const app = express();
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
