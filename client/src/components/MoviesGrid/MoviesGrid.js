import React from "react";
import Movie from "../Movie/Movie";
import S from "./style";
import { useMovieContext } from "../../hooks/useMovieContext";
function MoviesGrid({ movies }) {
  const [getters, setters] = useMovieContext();
  return (
    <S.MoviesContainer>
      {Object.keys(movies).length > 0 &&
        movies.data.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              title={movie.title}
              rating={movie.imdbRating}
              image={movie.poster}
              plot={movie.plot}
              // onMovieClick={showMovieInfo}
            />
          );
        })}
    </S.MoviesContainer>
  );
}

export default MoviesGrid;
