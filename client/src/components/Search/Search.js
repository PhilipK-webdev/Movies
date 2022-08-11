import React from "react";
import S from "./style";
import { SpinnerCircularFixed } from "spinners-react";
function Search({ searchValue, onSearch, onSubmit, isLoading, isDisabled }) {
  return (
    <S.Container>
      <S.From onSubmit={onSubmit}>
        <S.TextInput
          type="text"
          placeholder="Enter a movie"
          value={searchValue}
          onChange={onSearch}
        />
        <S.Button
          type="submit"
          onClick={onSubmit}
          isDisabled={isDisabled}
          boolean={isLoading}
          searchValue={searchValue}
        >
          Search{" "}
          <SpinnerCircularFixed
            enabled={isLoading}
            size={"30px"}
            thickness={101}
            speed={100}
            color="rgba(255, 255, 255, 1)"
            secondaryColor="rgba(255, 32, 111, 1)"
          />
        </S.Button>
      </S.From>
    </S.Container>
  );
}

export default Search;
