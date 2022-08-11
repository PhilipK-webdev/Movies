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
  @media only screen and (max-width: 90em) {
    grid-gap: 15px;
  }
  @media only screen and (max-width: 84.375em) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: 64em) {
    grid-gap: 25px;
  }
  @media only screen and (max-width: 55.375em) {
    width: 85vw;
  }
  @media only screen and (max-width: 48em) {
    width: 75vw;
  }
  @media only screen and (max-width: 37.5em) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30vh;
    width: 33vw;
  }
`;
export default { MoviesContainer };
