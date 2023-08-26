const express = require("express");
const { Travelcontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Travel",
    Travelcontroller.createTravel
);

router.get(
    "/list",
    Travelcontroller.Travellist
);

router.delete(
    "/Delete/:TravelId",
    Travelcontroller.deleteTravel
);

module.exports = router;