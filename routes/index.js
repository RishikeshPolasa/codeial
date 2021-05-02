const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("express router is running");

router.get("/", homeController.home);
router.use("/users", require("./users"));

//for any further routes,acces from here
//router.use('/routerName',require('./routerFile'))

router.use("/users", require("./posts"));

module.exports = router;
