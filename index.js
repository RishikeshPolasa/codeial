const express = require("express");
const cookieParser = require("cookie-parser");
const port = 8000;
const app = express();
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//use express Router
app.use("/", require("./routes/index"));

//setup the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server is running on port : ${port}`);
});
