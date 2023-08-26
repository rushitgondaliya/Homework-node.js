const{ Pharmacy } = require("../models");

/**
 * create Pharmacy
 * @param {object}reqBody
 * @returns {Promise<Pharmacy>}
*/

const createPharmacy = async(reqBody) => {
    return Pharmacy.create(reqBody);
};

const getPharmacylist = async(req , res) => {
    return Pharmacy.find({$or: [{Madicine_name :"dolo" }]});
}

const deletePharmacy = async(PharmacyId) => {
    return Pharmacy.findByIdAndDelete(PharmacyId);
}

module.exports ={
    createPharmacy,
    getPharmacylist,
    deletePharmacy
}