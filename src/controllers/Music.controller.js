const { Musicservice } = require("../services");

/* Create Music*/

const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const Music = await Musicservice.createMusic(reqBody);
        if (!Music) {
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

/* Get Music*/

const Musiclist = async (req, res) => {
    try {
        const getMusic = await Musicservice.getMusiclist();
        res.status(200).json({
            success: true,
            message: "Music list!!",
            data: {
                getMusic,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete Music */

const deleteMusic = async (req, res) => {
    try {
        const MusicId = req.params.MusicId;
        const MusicExists = await Musicservice.getMusiclist(MusicId);
        if (!MusicExists) {
            throw new Error("Music not found!");
        }
        await Musicservice.deleteMusic(MusicId);

        res.status(200).json({
            success: true,
            message: "Music delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createMusic,
    Musiclist,
    deleteMusic
}