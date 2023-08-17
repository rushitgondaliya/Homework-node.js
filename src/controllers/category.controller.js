const { categoryService} = require("../services");


/** create Category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

      // console.log(reqBody);
    // const userExists = await CategoryService.getCategoryByEmail(reqBody.email);
    // if (CategoryExists) {
    //   throw new Error("User already created by this email!");
    // }

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCategory,
};