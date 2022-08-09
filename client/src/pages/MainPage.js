import React, { useState, useMemo } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useMovieContext } from "../hooks/useMovieContext";
import S from "./style";
function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [getters, setters] = useMovieContext();
  const { moviesLocalStorage } = getters;
  const moviesData = useMemo(() => {
    let filteredMovies = moviesLocalStorage;
    const _searchTerm = searchTerm.trim();
    if (!_searchTerm) {
      return filteredMovies;
    }
    if (_searchTerm) {
      console.log(_searchTerm);
      // filteredMovies = filteredMovies.filter((movie) =>
      //   movie.title.toLowerCase().includes(_searchTerm.toLowerCase())
      // );
    }
    return filteredMovies;
  }, [moviesLocalStorage, searchTerm]);
  return (
    <S.Container>
      <Header />
      <Pagination />
      <Search
        searchValue={searchTerm}
        onSearch={(e) => setSearchTerm(e.target.value)}
      />
      <S.Main>
        <MoviesGrid movies={moviesData} />
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default MainPage;
