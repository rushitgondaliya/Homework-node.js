const{ Travel } = require("../models");

/**
 * create Stationary
 * @param {object}reqBody
 * @returns {Promise<Travel>}
*/

const createTravel = async(reqBody) => {
    return Travel.create(reqBody);
};

const getTravellist = async(req , res) => {
    return Travel.find({$or: [{Travel_From :"surat" }]});
}

const deleteTravel = async(TravelId) => {
    return Travel.findByIdAndDelete(TravelId);
}

module.exports ={
    createTravel,
    getTravellist,
    deleteTravel
}