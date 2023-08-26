const { Hotelservice } = require("../services");

/* Create Hotel*/

const createHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        const Hotel = await Hotelservice.createHotel(reqBody);
        if (!Hotel) {
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

/* Get Hotel*/

const Hotellist = async (req, res) => {
    try {
        const getHotel = await Hotelservice.getHotellist();
        res.status(200).json({
            success: true,
            message: "Hotel list!!",
            data: {
                getHotel,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete Hotel */

const deleteHotel = async (req, res) => {
    try {
        const HotelId = req.params.HotelId;
        const HotelExists = await Hotelservice.deleteHotel(HotelId);
        if (!HotelExists) {
            throw new Error("Hotel not found!");
        }
        await Hotelservice.deleteHotel(HotelId);

        res.status(200).json({
            success: true,
            message: "Hotel delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createHotel,
    Hotellist,
    deleteHotel
}