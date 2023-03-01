const express = require('express');
const router = express.Router();
const typePlaceController = require('../controllers/typePlace.controller');


router.post("/placeTypes", typePlaceController.createTypePlace);
router.get("/placeTypes",  typePlaceController.getTypesPlace);
router.get("/placeTypes/:id",  typePlaceController.getTypePlaceById);
router.put("/placeTypes/:id",  typePlaceController. updateTypePlace);
router.delete("/placeTypes/:id",  typePlaceController. deleteTypePlace);
module.exports = router;