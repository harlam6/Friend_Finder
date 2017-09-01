var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path")

var app = express ();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/apiroutes")(app); 
require("./routing/htmlroutes")(app);



app.get("/", function (req, res) {
	res.sendfile(path.join(__dirname, "/public/home.html"))
});

app.get ("/madepreorder", function (req, res) {
	res.sendfile(path.join(__dirname, "/public/friends.html"))
});

app.get("/api/friends", function (req, res) {
  res.sendfile(path.join(__dirname, "/data/friends"))
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});