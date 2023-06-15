const Express = require("express");

const app = Express();

// set headers

// set routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

// set middlewares

// set server

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
