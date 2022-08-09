import React from "react";
import S from "./style";
function Pagination() {
  const pagesToRender = [1, 2, 3, 4, 5];
  return (
    <S.Container>
      {pagesToRender.map((page, index) => {
        return (
          <S.Page key={index} onClick={() => console.log("Click me")}>
            {page}
          </S.Page>
        );
      })}
    </S.Container>
  );
}

export default Pagination;
