const express = require("express");
const port = 8000;
const app = express();

//use express Router
app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server is running on port : ${port}`);
});
