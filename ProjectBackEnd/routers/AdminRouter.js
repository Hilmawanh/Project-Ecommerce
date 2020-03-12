var express = require("express");
var router = express.Router();
const { AdminController } = require("../controllers");

router.post("/add-prod", AdminController.addNewProduk);
router.put("/edit-prod/:id", AdminController.editProduk)
router.get("/get-prod", AdminController.getProdukSepeda)
router.get('/get-prod-gear', AdminController.getProdukGear)
router.get('/view-details/:id', AdminController.ViewDetailsRoadbike)
router.get('/view-details2/:id', AdminController.ViewDetailsMountain)
router.get('/view-details3/:id', AdminController.ViewDetailDailyBmxEbike)
router.get('/view-details4/:id', AdminController.ViewDetailGear)
// router.get('/get-prod-category', AdminController.getProdukRoadbikeCategory)
router
router.delete("/delete-prod/:id", AdminController.deleteProduk)

module.exports = router;
