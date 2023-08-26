const { Schoolservice } = require("../services");

/* Create School*/

const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const School = await Schoolservice.createSchool(reqBody);
        if (!School) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: reqBody,
            data: { reqBody },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* Get School*/

const Schoollist = async (req, res) => {
    try {
        const getSchool = await Schoolservice.getSchoollist();
        res.status(200).json({
            success: true,
            message: "School list!!",
            data: {
                getSchool,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete School */

const deleteSchool = async (req, res) => {
    try {
        const SchoolId = req.params.SchoolId;
        const SchoolExists = await Schoolservice.deleteSchool(SchoolId);
        if (!SchoolExists) {
            throw new Error("School not found!");
        }
        await Schoolservice.deleteSchool(SchoolId);

        res.status(200).json({
            success: true,
            message: "School delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createSchool,
    Schoollist,
    deleteSchool
}