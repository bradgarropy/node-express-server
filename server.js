const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send(req.method + req.originalUrl);
});

app.post("/", function(req, res) {
    res.send(req.method + req.originalUrl);
});

app.patch("/", function(req, res) {
    res.send(req.method + req.originalUrl);
});

app.delete("/", function(req, res) {
    res.send(req.method + req.originalUrl);
});


// start application
const port = 3000;
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
