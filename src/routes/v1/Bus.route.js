const express = require("express");
const { Buscontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Bus",
    Buscontroller.createBus
);

router.get(
    "/list",
    Buscontroller.Buslist
);

router.delete(
    "/Delete/:BusId",
    Buscontroller.deleteBus
);

module.exports = router;