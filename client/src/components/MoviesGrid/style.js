import styled from "styled-components";

const MoviesContainer = styled.div`
  display: flex;
  grid-gap: 1.1rem;
  jusitfy-content: center;
  flex-wrap: wrap;
  overflow: auto;
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
