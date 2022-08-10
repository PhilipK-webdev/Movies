import styled from "styled-components";

const Container = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 87vh;
`;

const Main = styled.div`
  width: 100vw;
  @media only screen and (max-width: 106.25em) {
    display: flex;
  }
  @media only screen and (max-width: 88.75em) {
    display: flex;
  }
  @media only screen and (max-width: 75em) {
    display: flex;
  }
`;

export default { Container, Main };
