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

  return (
    <MovieContext.Provider value={{ moviesLocalStorage }}>
      <UpdateMovieContext.Provider value={{ setMoviesLocalStorage }}>
        {children}
      </UpdateMovieContext.Provider>
    </MovieContext.Provider>
  );
}

export default MovieProvider;
