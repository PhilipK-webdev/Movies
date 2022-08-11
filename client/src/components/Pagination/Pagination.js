import React from "react";
import S from "./style";
function Pagination({ pages, onClick, currentPage }) {
  const pagesToRender = new Array(pages).fill().map((_, index) => index);
  return (
    <S.Container size={pages}>
      {pages !== 1 &&
        pagesToRender.map((page, index) => {
          return (
            <S.Page
              key={index}
              onClick={() => onClick(index)}
              currentPage={currentPage}
              index={pagesToRender[index]}
            >
              {page + 1}
            </S.Page>
          );
        })}
    </S.Container>
  );
}

export default Pagination;
