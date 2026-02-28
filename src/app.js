const config = require("./util/config")
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(config.PORT, () => {
  console.log(`App listening port ${config.PORT}`);
});
