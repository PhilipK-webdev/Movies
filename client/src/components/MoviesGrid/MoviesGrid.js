import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import { useMovieContext } from "../../hooks/useMovieContext";
import S from "./style";
import Modal from "../Modal/Modal";

const movieDataCache = new Map();
function MoviesGrid() {
  const [getters, setters] = useMovieContext();
  const { movies } = getters;
  const [movieData, setMovieData] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setMovieData(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const showMovieInfo = async (imdbID) => {
    let data;
    const _response = {};
    let movieDataCopy = [];
    if (movieDataCache.has(imdbID)) {
      data = movieDataCache.get(imdbID);
      setMovieData(data);
      _response.ok = true;
    } else {
      try {
        data = await fetch(`/api/movie/${imdbID}`);
        _response.ok = data.ok;
        movieDataCopy = await data.json();
        movieDataCache.set(imdbID, movieDataCopy);
        if (_response.ok) {
          setMovieData(movieDataCopy);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <S.MoviesContainer>
      {movieData && (
        <Modal setOpenModal={() => setMovieData(null)} data={movieData} />
      )}
      {Object.keys(movies).length > 0 &&
        movies.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              rating={movie.imdbRating}
              image={movie.Poster}
              year={movie.Year}
              onMovieClick={showMovieInfo}
              imdbID={movie.imdbID}
            />
          );
        })}
    </S.MoviesContainer>
  );
}

export default MoviesGrid;
