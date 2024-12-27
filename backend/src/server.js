const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, (req, res) => {
  console.log("Server Listening on Port 5000");
});
