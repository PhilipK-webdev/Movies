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
  const [page, setPage] = useState(() => 1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, isError] = useState("");
  const [, setters] = useMovieContext();
  const { setMovies } = setters;
  const [moviesFromLocalStorage, setMoviesFromLocalStorage] = useLocalStorage(
    "movies",
    {}
  );

  function cache(map, url) {}

  const findMovie = async (e) => {
    e.preventDefault();
    let data;
    const _response = {};
    let movieDataCopy = [];
    if (searchTerm) {
      setIsLoading(true);
      if (movieDataCache.has(searchTerm)) {
        data = movieDataCache.get(searchTerm);
        const page = pageCache.get("page");
        setMovies(data);
        setPage(page);
        _response.ok = true;
      } else {
        try {
          data = await fetch(`/api/movies/${searchTerm}/${page}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          const { Search, totalResults, Response, Error } = await data.json();
          if (Response === "True") {
            _response.ok = data.ok;
            movieDataCopy = Search;
            movieDataCache.set(searchTerm, movieDataCopy);
            const count = Math.ceil(Number(totalResults) / 10);
            setPage(count);
            pageCache.set("page", count);
            setMovies([...Search]);
          } else {
            isError(Error);
            setTimeout(() => {
              isError("");
            }, 2000);
            setMovies([...moviesFromLocalStorage]);
            setSearchTerm("");
            setPage(1);
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    }
    setIsLoading(false);
    setIsDisabled(true);
  };

  const forwardPage = async (page) => {
    let data;
    const _response = {};
    let movieDataCopy = [];
    if (movieAndPageCache.has(page)) {
      data = movieAndPageCache.get(page);
      setMovies(data);
    } else {
      try {
        data = await fetch(`/api/movies/${searchTerm}/${page + 1}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const { Search, Response, Error } = await data.json();
        if (Response === "True") {
          _response.ok = data.ok;
          movieDataCopy = Search;
          movieAndPageCache.set(page, movieDataCopy);
          setMovies([...Search]);
        } else {
          isError(Error);
          setTimeout(() => {
            isError("");
          }, 2000);
          setMovies([...moviesFromLocalStorage]);
          setSearchTerm("");
          setPage(1);
          setIsLoading(false);
          setIsDisabled(true);
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
        <Pagination page={page} onClick={forwardPage} />
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
