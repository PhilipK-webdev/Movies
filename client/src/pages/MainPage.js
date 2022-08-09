import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import S from "./style";
function MainPage() {
  return (
    <S.Container>
      <Header />
      <Pagination />
      <Search />
      <S.Main>
        <MoviesGrid />
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default MainPage;
