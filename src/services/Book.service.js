const { Book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const CreateBook = async (reqBody) => {
  return Book.create(reqBody);
};

module.exports = {
    CreateBook,
};