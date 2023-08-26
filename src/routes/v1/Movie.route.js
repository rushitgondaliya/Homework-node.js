const express = require("express");
const { Moviecontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-movie",
    Moviecontroller.createMovie
);

router.get(
    "/list",
    Moviecontroller.Movielist
);

router.delete(
    "/Delete/:MovieId",
    Moviecontroller.deleteMovie
);

module.exports = router;