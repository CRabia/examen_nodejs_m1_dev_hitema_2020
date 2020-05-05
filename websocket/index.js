require("./websocket-server");
const express = require("express");

const app = express();

const APP_PORT = 3000;

app.use(express.static(__dirname + "/public"));
app.listen(APP_PORT, () => {
  console.log("Server listening on port:", APP_PORT);
});
