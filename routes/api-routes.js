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
  const promises = [];
  for (let index = 0; index < MOVIES.length; index++) {
    promises.push(
      axios({
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        url: `https://omdbapi.com/?t=${MOVIES[index]}&type=movie&plot=short&apikey=${process.env.API_KEY_OMDB}`,
      })
    );
  }
  try {
    const values = await Promise.all(promises);
    values.forEach((value, index) => {
      const movieObject = {
        title: value.data.Title,
        imdbRating: value.data.imdbRating,
        imdbID: value.data.imdbID,
        poster: value.data.Poster,
        plot: value.data.Plot,
      };
      movieArray.push(movieObject);
    });
    const data = { data: movieArray };
    res.json(data).status(200);
  } catch (error) {
    console.log("error", error);
  }
});
router.get("/api/movies/:movie/:page", async (req, res) => {
  const { movie, page } = req.params;
  const data = await axios({
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    url: `https://omdbapi.com/?s=${movie}&type=movie&apikey=${process.env.API_KEY_OMDB}&page=${page}`,
  });
  const movies = await data.data;
  res.json(movies).status(200);
});

router.get("/api/movie/:id", async (req, res) => {
  const data = await axios({
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    url: `https://omdbapi.com/?i=${req.params.id}&type=movie&apikey=${process.env.API_KEY_OMDB}`,
  });
  const movies = await data.data;
  res.json(movies).status(200);
});

module.exports = router;
