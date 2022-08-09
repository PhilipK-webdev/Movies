require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");

const MOVIES = [
  "Inception",
  "The Green Mile",
  "Whiplash",
  "Avengers: Infinity War",
  "Captain America: The First Avenger",
  "Captain America: The Winter Soldier",
  "Doctor Strange",
  "Avengers:Endgame",
  "Bad Boys",
  "Independence Day",
];

router.get("/api/movies", async (req, res) => {
  const movieArray = [];
  for (let index = 0; index < MOVIES.length; index++) {
    const response = await axios({
      method: "GET",
      url: `https://omdbapi.com/?t=${MOVIES[index]}&type=movie&apikey=${process.env.API_KEY_OMDB}`,
    });
    const movieObject = {
      title: await response.data.Title,
      imdbRating: await response.data.imdbRating,
      imdbID: await response.data.imdbID,
      poster: await response.data.Poster,
      plot: await response.data.Plot,
    };
    movieArray.push(movieObject);
  }
  res.json(movieArray).status(200);
});
router.get("/api/movies/:movie/:page", async (req, res) => {
  const { movie, page } = req.params;
  const data = await axios({
    method: "GET",
    url: `https://omdbapi.com/?s=${movie}&type=movie&apikey=${process.env.API_KEY_OMDB}&page=${page}`,
  });
  const movies = await data.data;
  res.json(movies).status(200);
});

router.get("/api/movie/:id", async (req, res) => {
  const data = await axios({
    method: "GET",
    url: `https://omdbapi.com/?i=${req.params.id}&type=movie&apikey=${process.env.API_KEY_OMDB}`,
  });
  const movies = await data.data;
  res.json(movies).status(200);
});

module.exports = router;
