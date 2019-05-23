const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public/"));

app.set("view engine", "ejs");

const routes = {
    "/": require(__dirname + "/app/routes/index")
}

for (var key in routes) {
    app.use(key, routes[key]);
}

app.listen(8080);