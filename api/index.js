import express from "express";

import routes from "./routes/index.js";

const app = express();

app.use(routes.userRoutes);

// Setup server to accept headers
// Install JWT and setup middleware
// Use middleware on getUsers route

app.listen("3000", () => {
  console.log("Port listening on port 3000");
});
