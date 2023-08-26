const express = require("express");
const { Hotelcontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Hotel",
    Hotelcontroller.createHotel
);

router.get(
    "/list",
    Hotelcontroller.Hotellist
);

router.delete(
    "/Delete/:HotelId",
    Hotelcontroller.deleteHotel
);

module.exports = router;