const{ School } = require("../models");

/**
 * create Stationary
 * @param {object}reqBody
 * @returns {Promise<School>}
*/

const createSchool = async(reqBody) => {
    return School.create(reqBody);
};

const getSchoollist = async(req , res) => {
    return School.find({$or: [{School_name :"ashadeep-iit" }]});
}

const deleteSchool = async(SchoolId) => {
    return School.findByIdAndDelete(SchoolId);
}

module.exports ={
    createSchool,
    getSchoollist,
    deleteSchool
}