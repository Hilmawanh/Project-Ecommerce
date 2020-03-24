const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/userRegister", AuthController.userRegister);
// router.post("/loginUser", AuthController.userLogin);
router.get("/userLoginn", AuthController.userLoginn);
router.get("/userLoginn/:id", AuthController.userLoginn);
router.get("/getCart/:id", AuthController.userGetCart)
router.get("/getCheckout/:id", AuthController.getCheckout)
router.put("/checkoutCart/:id", AuthController.userCartCheckout)
router.put("/checkoutCancel/:id", AuthController.userCancelCheckout)
router.post('/postTransaction', AuthController.userTransaction)
router.delete("/deleteCart/:id/:userId", AuthController.deleteCart)
router.post("/userTransaksi", AuthController.userTransaksi)
router.get("/getHistory/:id", AuthController.userHistory)


module.exports = router;
