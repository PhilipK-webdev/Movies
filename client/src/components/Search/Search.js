import React from "react";
import S from "./style";
function Search() {
  return (
    <S.Container>
      <S.From>
        <S.TextInput type="text" placeholder="Enter movie" />
        <S.Button type="submit" value="Submit" />
      </S.From>
    </S.Container>
  );
}

export default Search;
