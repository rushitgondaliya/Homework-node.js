const express = require("express");
const { Jewellerycontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Jewellery",
    Jewellerycontroller.createJewellery
);

router.get(
    "/list",
    Jewellerycontroller.Jewellerylist
);

router.delete(
    "/Delete/:JewelleryId",
    Jewellerycontroller.deleteJewellery
);

module.exports = router;