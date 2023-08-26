const { Movieservice } = require("../services");

/* Create Movie*/

const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const Movie = await Movieservice.createMovie(reqBody);
        if (!Movie) {
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

/* Get Movie*/

const Movielist = async (req, res) => {
    try {
        const getMovie = await Movieservice.getMovielist();
        res.status(200).json({
            success: true,
            message: "Movie list!!",
            data: {
                getMovie,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete Movie */

const deleteMovie = async (req, res) => {
    try {
        const MovieId = req.params.MovieId;
        const MovieExists = await Movieservice.deleteMovie(MovieId);
        if (!MovieExists) {
            throw new Error("Movie not found!");
        }
        await Movieservice.deleteMovie(MovieId);

        res.status(200).json({
            success: true,
            message: "Movie delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createMovie,
    Movielist,
    deleteMovie
}