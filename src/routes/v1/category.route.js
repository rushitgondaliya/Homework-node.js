const express = require("express");
// const { userValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  categoryController.createCategory
);

/** Get category-list */
router.get(
  "/list",
  categoryController.categoryList
  );

/** delete category-list */

router.delete(
  "/delete/:categoryId",
  categoryController.deleteRecord
)

module.exports = router;