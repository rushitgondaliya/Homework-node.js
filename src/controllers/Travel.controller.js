const { Travelservice } = require("../services");

/* Create Travel*/

const createTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const Travel = await Travelservice.createTravel(reqBody);
        if (!Travel) {
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

/* Get Travel*/

const Travellist = async (req, res) => {
    try {
        const getTravel = await Travelservice.getTravellist();
        res.status(200).json({
            success: true,
            message: "Travel list!!",
            data: {
                getTravel,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete Travel */

const deleteTravel = async (req, res) => {
    try {
        const TravelId = req.params.TravelId;
        const TravelExists = await Travelservice.deleteTravel(TravelId);
        if (!TravelExists) {
            throw new Error("Travel not found!");
        }
        await Travelservice.deleteTravel(TravelId);

        res.status(200).json({
            success: true,
            message: "Travel delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createTravel,
    Travellist,
    deleteTravel
}