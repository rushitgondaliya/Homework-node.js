const { category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createcategory = async (reqBody) => {
  return category.create(reqBody);
};

module.exports = {
  createcategory,
};