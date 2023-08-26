const express = require("express");
const { Schoolcontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-School",
    Schoolcontroller.createSchool
);

router.get(
    "/list",
    Schoolcontroller.Schoollist
);

router.delete(
    "/Delete/:SchoolId",
    Schoolcontroller.deleteSchool
);

module.exports = router;