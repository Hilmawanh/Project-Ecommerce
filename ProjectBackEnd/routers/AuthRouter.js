const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/userRegister", AuthController.userRegister);
// router.post("/loginUser", AuthController.userLogin);
router.get("/userLoginn", AuthController.userLoginn);
router.get("/userLoginn/:id", AuthController.userLoginn);
router.get("/getCart/:id", AuthController.userGetCart)
router.post('/getTransaction', AuthController.userTransaction)

module.exports = router;
