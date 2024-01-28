require("dotenv").config();
global.argv = process.argv.slice(2);
global.port = global.argv[0] || process.env.APP_PORT;
if (!global.port) {
  console.log("port is not defined. argv = ", global.argv);
  process.exit(128);
}
const express = require("express");
const cors = require("cors");
const app = express();
const { session_middleware }= require('./middlewares')
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({
  origin:['http://localhost:3000'],
  methods:['POST','GET'], 
  credentials: true
})); 

app.listen(global.port, () => {
  console.clear();
  console.log(`Server is listening on port ${global.port}`);
});
app.use(session_middleware);
require("./config").db_connection;
app.use(require("./routes"));

process.on("uncaughtException", (err) => {
  console.log("uncaught exception", err);
});
module.exports = app;
