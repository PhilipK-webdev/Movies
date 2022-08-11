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
  @media only screen and (max-width: 88.875em) {
    width: 64vw;
  }
  @media only screen and (max-width: 64em) {
    width: 60vw;
    grid-gap: 15px;
  }
  @media only screen and (max-width: 55.375em) {
    width: 57vw;

    grid-gap: 10px;
  }
  @media only screen and (max-width: 48em) {
    width: 75vw;
    grid-gap: 5px;
  }
  @media only screen and (max-width: 37.5em) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30vh;
    width: 33vw;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  margin-top: 17vh;
`;
export default { MoviesContainer, ImageContainer };
