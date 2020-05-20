var express = require("express");
var router = express.Router();
const { AdminController } = require("../controllers");

router.post("/add-prod", AdminController.addNewProduk);
router.put("/edit-prod/:id", AdminController.editProduk)
router.get("/get-prod/:page", AdminController.getProdukSepeda)
// router.get("/get-prod/:page", AdminController.getProdukSepeda)
router.get('/get-prod-mountain/:page', AdminController.getProdukMountain)
router.get('/get-prod-roadbike/:page', AdminController.getProdRoadbike)
router.get('/get-prod-bmx', AdminController.getProdukBmx)
router.get('/get-prod-daily', AdminController.getProdukDaily)
router.get('/get-prod-ebike', AdminController.getProdukEbike)
router.get('/get-prod-gear', AdminController.getProdukGear)
router.get('/get-prod-spareparts', AdminController.getProdukSpareParts)
router.get('/view-details/:id', AdminController.ViewDetailsRoadbike)
router.get('/view-details2/:id', AdminController.ViewDetailsMountain)
router.get('/view-details3/:id', AdminController.ViewDetailDailyBmxEbike)
router.get('/view-details4/:id', AdminController.ViewDetailGear)
// router.get('/get-prod-category', AdminController.getProdukRoadbikeCategory)
router.get("/getPayment", AdminController.adminGetPayment)
router.put("/updatePayment/:id", AdminController.adminGetPayment2)
router.get('')
router.put("/declinePayment/:id", AdminController.declinePayment)
router.delete("/delete-prod/:id", AdminController.deleteProduk)

// router.put('/confirmPayment/:id', AdminController.confirmTransaksi)

module.exports = router;
