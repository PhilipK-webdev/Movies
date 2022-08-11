import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useMovieContext } from "../hooks/useMovieContext";
import { useLocalStorage } from "../hooks";
import S from "./style";
import Alert from "../components/Alert/Alert";
const movieDataCache = new Map();
const pageCache = new Map();
const movieAndPageCache = new Map();
function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const [pages, setPage] = useState(() => 1);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, isSetError] = useState("");
  const [, setters] = useMovieContext();
  const { setMovies } = setters;
  const [moviesFromLocalStorage, setMoviesFromLocalStorage] = useLocalStorage(
    "movies",
    {}
  );

  const findMovie = async (e) => {
    e.preventDefault();
    let data;
    let movieDataCopy = [];
    if (searchTerm) {
      setIsLoading(true);
      setCurrentPage(0);
      setPage(1);
      if (movieDataCache.has(searchTerm)) {
        data = movieDataCache.get(searchTerm);
        const page = pageCache.get(searchTerm);
        setLastSearch(searchTerm);
        setMovies(data);
        setPage(page);
      } else {
        try {
          data = await fetch(`/api/movies/${searchTerm}/${1}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          const { Search, totalResults, Response, Error } = await data.json();
          if (Response === "True") {
            movieDataCopy = Search;
            movieDataCache.set(searchTerm, movieDataCopy);
            const count = Math.ceil(Number(totalResults) / 10);
            setPage(count);
            pageCache.set(searchTerm, count);
            setMovies([...Search]);
            setLastSearch(searchTerm);
          } else {
            isSetError(Error);
            setTimeout(() => {
              isSetError("");
            }, 2000);
            setMovies([...moviesFromLocalStorage]);
            setSearchTerm("");
            setPage(1);
            setLastSearch("");
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    }
    setIsLoading(false);
    setIsDisabled(true);
  };

  const forwardBackPage = async (page) => {
    let data;
    const _response = {};
    let movieDataCopy = [];
    const key = lastSearch + page;
    if (movieAndPageCache.has(key)) {
      data = movieAndPageCache.get(key);
      setMovies(data);
      setCurrentPage(page);
    } else {
      try {
        data = await fetch(`/api/movies/${lastSearch}/${page + 1}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const { Search, Response, Error } = await data.json();
        if (Response === "True") {
          _response.ok = data.ok;
          movieDataCopy = Search;
          movieAndPageCache.set(key, movieDataCopy);
          setMovies([...Search]);
          setCurrentPage(page);
        } else {
          isSetError(Error);
          setTimeout(() => {
            isSetError("");
          }, 2000);
          setMovies([...moviesFromLocalStorage]);
          setSearchTerm("");
          setPage(1);
          setIsLoading(false);
          setIsDisabled(true);
          setCurrentPage(0);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <S.Container>
      <Header />
      <S.Main>
        {error && <Alert title={error} />}
        <Pagination
          pages={pages}
          onClick={forwardBackPage}
          currentPage={currentPage}
        />
        <Search
          isLoading={isLoading}
          isDisabled={isDisabled}
          searchValue={searchTerm}
          onSearch={(e) => {
            if (e.target.value) {
              setSearchTerm(e.target.value);
              setIsDisabled(false);
            } else {
              setMovies([...moviesFromLocalStorage]);
              setSearchTerm("");
              setPage(1);
              setIsLoading(false);
              setIsDisabled(true);
              setCurrentPage(0);
            }
          }}
          onSubmit={(e) => findMovie(e)}
        />
        <MoviesGrid />
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default MainPage;
