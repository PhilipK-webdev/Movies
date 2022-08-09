import React from "react";
import S from "./style";
function Search({ searchValue, onSearch }) {
  return (
    <S.Container>
      <S.From
        onSubmit={(e) => {
          e.preventDefault();
          console.log("here");
        }}
      >
        <S.TextInput
          type="text"
          placeholder="Enter movie"
          value={searchValue}
          onChange={onSearch}
        />
        <S.Button
          type="submit"
          value="Search"
          onClick={() => console.log("here")}
        />
      </S.From>
    </S.Container>
  );
}

export default Search;
