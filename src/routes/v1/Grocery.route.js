const express = require("express");
const { Grocerycontroller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-Grocery",
    Grocerycontroller.createGrocery
);

router.get(
    "/list",
    Grocerycontroller.Grocerylist
);

router.delete(
    "/Delete/:groceryId",
    Grocerycontroller.deleteGrocery
);

module.exports = router;