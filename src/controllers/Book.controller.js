const { BookService} = require("../services");


/** create Category */
const CreateBook = async (req, res) => {
  try {
    const reqBody = req.body;

    const Book = await BookService.CreateBook(reqBody);
    if (!Book) {
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
  CreateBook,
};