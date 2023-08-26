const{ Hotel } = require("../models");

/**
 * create Hotel
 * @param {object}reqBody
 * @returns {Promise<Hotel>}
*/

const createHotel = async(reqBody) => {
    return Hotel.create(reqBody);
};

const getHotellist = async(req , res) => {
    return Hotel.find({$or: [{Customer_name :"rushit" }]});
}

const deleteHotel = async(HotelId) => {
    return Hotel.findByIdAndDelete(HotelId);
}

module.exports ={
    createHotel,
    getHotellist,
    deleteHotel
}