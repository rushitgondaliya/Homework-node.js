const express = require("express");
const { Pharmacycontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Pharmacy",
    Pharmacycontroller.createPharmacy
);

router.get(
    "/list",
    Pharmacycontroller.Pharmacylist
);

router.delete(
    "/Delete/:PharmacyId",
    Pharmacycontroller.deletePharmacy
);

module.exports = router;