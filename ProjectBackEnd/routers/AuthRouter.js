const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/userRegister", AuthController.userRegister);
router.post("/loginUser", AuthController.userLogin);
router.get("/userLoginn", AuthController.userLoginn);

module.exports = router;
