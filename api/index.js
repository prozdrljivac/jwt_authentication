const express = require("express");

const userRoutes = require("./routes/user");

const app = express();

app.use(userRoutes);

// Setup server to accept headers
// Install JWT and setup middleware
// Use middleware on getUsers route

app.listen("3000", () => {
  console.log("Port listening on port 3000");
});
