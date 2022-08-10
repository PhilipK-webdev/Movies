import styled from "styled-components";

const MoviesContainer = styled.div`
  display: grid;
  grid-template-rows: 10rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 10rem;
  height: 49rem;
  align-content: flex-start;
  margin-left: 8rem;
  margin-right: 3rem;
  @media only screen and (max-width: 118.5em) {
    row-gap: 10rem;
  }
  @media only screen and (max-width: 106.5em) {
    column-gap: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    overflow: auto;
    height: 55rem;
  }
  @media only screen and (max-width: 88.75em) {
    margin-left: 1rem;
    margin-right: 1rem;
    overflow: auto;
    height: 55rem;
  }
  @media only screen and (max-width: 75em) {
    display: flex;
    grid-gap: 1.1rem;
    jusitfy-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 37.5em) {
    flex-wrap: wrap;
  }
`;
export default { MoviesContainer };
