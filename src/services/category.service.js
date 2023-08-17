const { category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createCategory = async (reqBody) => {
  return category.create(reqBody);
};

module.exports = {
  createCategory,
};