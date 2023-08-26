const express = require("express");
const { Stationarycontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Stationary",
    Stationarycontroller.createStationary
);

router.get(
    "/list",
    Stationarycontroller.Stationarylist
);

router.delete(
    "/Delete/:StationaryId",
    Stationarycontroller.deleteStationary
);

module.exports = router;