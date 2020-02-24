var express = require("express");
var router = express.Router();
const { AdminController } = require("../controllers");

router.post("/add-prod", AdminController.addNewProduk);
router.get('/get-prod', AdminController.getProdukSepeda)

module.exports = router;
