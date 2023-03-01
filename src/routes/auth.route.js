const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth.controller");
const {
  checkAuth,
  checkIdentity,
  validation,
} = require("../Middleware/validators");
router.post("/login", authcontroller.login);
router.post("/register", validation, checkIdentity, authcontroller.register);

module.exports = router;
const myObj = {
  key1: "ghjk",
  key2: "ghjkl",
};

const { key1 } = myObj;

myObj.key1;
