const express = require("express");
// const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const BookRoute = require("./book.route");

const router = express.Router();

// router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/Category", categoryRoute);
router.use("/Book", BookRoute);

module.exports = router;