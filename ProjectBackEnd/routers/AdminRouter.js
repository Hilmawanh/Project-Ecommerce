var express = require("express");
var router = express.Router();
const { AdminController } = require("../controllers");

router.post("/add-prod", AdminController.addNewProduk);
router.put("/edit-prod/:id", AdminController.editProduk)
router.get("/get-prod", AdminController.getProdukSepeda)
router.get('/view-details/:id', AdminController.ViewDetails)
router.get('/get-prod-category', AdminController.getProdukRoadbikeCategory)
router
router.delete("/delete-prod/:id", AdminController.deleteProduk)

module.exports = router;
