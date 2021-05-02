const express = require("express");
const port = 8000;
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);
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
