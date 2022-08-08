require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");

router.get("/api/movies/:movie/:page", async (req, res) => {
  const { movie, page } = req.params;
  const data = await axios({
    method: "GET",
    url: `https://omdbapi.com/?s=${movie}&type=movie&apikey=${process.env.API_KEY}&page=${page}`,
  });
  const movies = await data.data;
  res.json(movies).status(200);
});

router.get("/api/movie/:id", async (req, res) => {
  const data = await axios({
    method: "GET",
    url: `https://omdbapi.com/?i=${req.params.id}&type=movie&apikey=${process.env.API_KEY}`,
  });
  const movies = await data.data;
  res.json(movies).status(200);
});

module.exports = router;
