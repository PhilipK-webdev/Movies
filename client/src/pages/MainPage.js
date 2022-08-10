import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useMovieContext } from "../hooks/useMovieContext";
import { useLocalStorage } from "../hooks";
import S from "./style";
function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(() => 1);

  const [getters, setters] = useMovieContext();
  const { setMovies } = setters;
  const [moviesFromLocalStorage, setMoviesFromLocalStorage] = useLocalStorage(
    "movies",
    {}
  );
  const findMovie = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const response = await fetch(`/api/movies/${searchTerm}/${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const { Search, totalResults } = await response.json();
        const count = Math.ceil(Number(totalResults) / 10);
        setPage(count);
        setMovies([...Search]);
      }
    }
  };

  const forwardPage = async (page) => {
    try {
      const response = await fetch(`/api/movies/${searchTerm}/${page + 1}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const { Search } = await response.json();
        setMovies([...Search]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <S.Container>
      <Header />
      <Pagination page={page} onClick={forwardPage} />
      <Search
        searchValue={searchTerm}
        onSearch={(e) => {
          if (e.target.value) {
            setSearchTerm(e.target.value);
          } else {
            setMovies([...moviesFromLocalStorage]);
            setSearchTerm("");
            setPage(1);
          }
        }}
        onSubmit={(e) => findMovie(e)}
      />
      <S.Main>
        <MoviesGrid />
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default MainPage;
