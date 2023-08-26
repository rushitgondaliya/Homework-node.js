const{ Bus } = require("../models");

/**
 * create Bus
 * @param {object}reqBody
 * @returns {Promise<Bus>}
*/

const createBus = async(reqBody) => {
    return Bus.create(reqBody);
};

const getBuslist = async(req , res) => {
    return Bus.find({$or: [{Ticket_price :"1200" }]});
}

const deleteBus = async(BusId) => {
    return Bus.findByIdAndDelete(BusId);
}

module.exports ={
    createBus,
    getBuslist,
    deleteBus
}
