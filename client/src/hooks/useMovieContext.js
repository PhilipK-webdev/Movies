import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from ".";
const MovieContext = createContext();
const UpdateMovieContext = createContext();

export function useMovieContext() {
  return [useContext(MovieContext), useContext(UpdateMovieContext)];
}
function MovieProvider({ children }) {
  const [moviesLocalStorage, setMoviesLocalStorage] = useLocalStorage(
    "movies",
    {}
  );
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (moviesLocalStorage.length) {
      setMovies([...moviesLocalStorage]);
    }
  }, [moviesLocalStorage]);
  return (
    <MovieContext.Provider value={{ moviesLocalStorage, movies }}>
      <UpdateMovieContext.Provider value={{ setMoviesLocalStorage, setMovies }}>
        {children}
      </UpdateMovieContext.Provider>
    </MovieContext.Provider>
  );
}

export default MovieProvider;
