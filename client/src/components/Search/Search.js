import React from "react";
import S from "./style";
function Search({ searchValue, onSearch, onSubmit }) {
  return (
    <S.Container>
      <S.From onSubmit={onSubmit}>
        <S.TextInput
          type="text"
          placeholder="Enter movie"
          value={searchValue}
          onChange={onSearch}
        />
        <S.Button type="submit" value="Search" onClick={onSubmit} />
      </S.From>
    </S.Container>
  );
}

export default Search;
