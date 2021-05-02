const express = require("express");
const port = 8000;
const app = express();

//use express Router
app.use("/", require("./routes/index"));

//setup the view engine
app.use("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server is running on port : ${port}`);
});
