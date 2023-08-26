const{ Jewellery } = require("../models");

/**
 * create Jewellery
 * @param {object}reqBody
 * @returns {Promise<Jewellery>}
*/

const createJewellery = async(reqBody) => {
    return Jewellery.create(reqBody);
};

const getJewellerylist = async(req , res) => {
    return Jewellery.find({$or: [{Jewellery_Name :"ring" }]});
}

const deleteJewellery = async(JewelleryId) => {
    return Jewellery.findByIdAndDelete(JewelleryId);
}

module.exports ={
    createJewellery,
    getJewellerylist,
    deleteJewellery
}