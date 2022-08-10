import React from "react";
import S from "./style";
function Pagination({ page, onClick }) {
  const pagesToRender = new Array(page).fill().map((_, index) => index);
  return (
    <S.Container>
      {page !== 1 &&
        pagesToRender.map((page, index) => {
          return (
            <S.Page key={index} onClick={() => onClick(index)}>
              {page + 1}
            </S.Page>
          );
        })}
    </S.Container>
  );
}

export default Pagination;
