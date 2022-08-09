import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useLocalStorage } from ".";
const MovieContext = createContext();
const UpdateMovieContext = createContext();

export function useMovieContext() {
  return [useContext(MovieContext), useContext(UpdateMovieContext)];
}
function MovieProvider({ children }) {
  const [moviesLocalStorage, setMoviesLocalStorage] = useLocalStorage(
    "movies",
    []
  );
  const getMovies = useCallback(async () => {
    const response = await fetch(`/api/movies/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok) {
      const moviesResponse = await response.json();
      setMoviesLocalStorage(moviesResponse.data);
    }
  }, []);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return (
    <MovieContext.Provider value={{ moviesLocalStorage }}>
      <UpdateMovieContext.Provider value={{ setMoviesLocalStorage }}>
        {children}
      </UpdateMovieContext.Provider>
    </MovieContext.Provider>
  );
}

export default MovieProvider;
