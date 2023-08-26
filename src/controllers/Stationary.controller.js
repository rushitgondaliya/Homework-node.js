const { Stationaryservice } = require("../services");

/* Create Stationary*/

const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const Stationary = await Stationaryservice.createStationary(reqBody);
        if (!Stationary) {
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

/* Get Stationary*/

const Stationarylist = async (req, res) => {
    try {
        const getStationary = await Stationaryservice.getStationarylist();
        res.status(200).json({
            success: true,
            message: "Stationary list!!",
            data: {
                getStationary,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete Stationary */

const deleteStationary = async (req, res) => {
    try {
        const StationaryId = req.params.StationaryId;
        const StationaryExists = await Stationaryservice.deleteStationary(StationaryId);
        if (!StationaryExists) {
            throw new Error("Stationary not found!");
        }
        await Stationaryservice.deleteStationary(StationaryId);

        res.status(200).json({
            success: true,
            message: "Stationary delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createStationary,
    Stationarylist,
    deleteStationary
}