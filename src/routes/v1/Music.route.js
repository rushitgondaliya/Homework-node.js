const express = require("express");
const { Musiccontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Music",
    Musiccontroller.createMusic
);

router.get(
    "/list",
    Musiccontroller.Musiclist
);

router.delete(
    "/Delete/:MusicId",
    Musiccontroller.deleteMusic
);

module.exports = router;