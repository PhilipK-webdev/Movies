import styled from "styled-components";

const MoviesContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 32vh);
  grid-template-columns: repeat(5, 1fr);
  width: 55vw;
  height: 70vh;
  margin: 5px auto;
  justify-items: center;
  grid-gap: 25px;
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
    grid-gap: 15px;
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
  }
`;
export default { MoviesContainer };
