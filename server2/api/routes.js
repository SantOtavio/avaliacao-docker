const express = require("express");
const router = express.Router();


const usersController = require("./Users/usersController");

router.use("/users" , usersController);


module.exports = router;