const{ Grocery } = require("../models");

/** 
 * create Grocery
 * @param {object}reqBody
 * @returns {Promise<Grocery>}
*/

const createGrocery = async(reqBody) => {
    return Grocery.create(reqBody);
};

const getGrocerylist = async(req , res) => {
    return Grocery.find();
}

const deleteGrocery = async(GroceryId) => {
    return Grocery.findByIdAndDelete(GroceryId);
}

module.exports ={
    createGrocery,
    getGrocerylist,
    deleteGrocery
}