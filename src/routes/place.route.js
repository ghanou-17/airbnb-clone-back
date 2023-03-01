const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/place.controller");
const veriftyToken = require("../Middleware/verifyToken");

router.get("/places", PlaceController.getPlaces);
router.post("/place", veriftyToken, PlaceController.createPlace);
router.delete("/place/:id", PlaceController.deleteOnPlace);
router.get("/places/:id", veriftyToken, PlaceController.getMyPlace);
router.get("/place/:id", PlaceController.getPlaceById);
router.put("/place/:id", PlaceController.updatePlace);

module.exports = router;
