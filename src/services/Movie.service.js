const{ Movie } = require("../models");

/**
 * create Movie
 * @param {object}reqBody
 * @returns {Promise<Movie>}
*/

const createMovie = async(reqBody) => {
    return Movie.create(reqBody);
};

const getMovielist = async(req , res) => {
    return Movie.find({$or: [{Ticket_price :"270" }]});
}

const deleteMovie = async(MovieId) => {
    return Movie.findByIdAndDelete(MovieId);
}

module.exports ={
    createMovie,
    getMovielist,
    deleteMovie
}