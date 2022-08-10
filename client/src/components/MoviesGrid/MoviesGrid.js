import React from "react";
import Movie from "../Movie/Movie";
import { useMovieContext } from "../../hooks/useMovieContext";
import S from "./style";
function MoviesGrid({ showMovieInfo }) {
  const [getters, setters] = useMovieContext();
  const { movies } = getters;
  return (
    <S.MoviesContainer>
      {Object.keys(movies).length > 0 &&
        movies.map((movie) => {
          console.log("movie", movie);
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
