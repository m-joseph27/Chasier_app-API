/* eslint-disable no-unused-vars */
const express = require("express");
const auth = require("../helpers/auth");

const router = express.Router();
const controlerAuth = require("../controllers/auth");

router.post("/login", controlerAuth.loginUser)
router.delete('/logout', controlerAuth.logout)
router.post("/register", controlerAuth.register)
router.get("/user", controlerAuth.getAll)
router.get("/user/:id", controlerAuth.getUserByID)

module.exports = router;
