const { categoryService } = require("../services");


/** create Category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/** get Category */

const categoryList = async (req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList();
    res.status(200).json({
      success: true,
      message: "Category List!",
      data: {
        getCategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** delete Category */

const deleteRecord = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const cateExists = await categoryService.getCategoryList(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  categoryList,
  deleteRecord
};