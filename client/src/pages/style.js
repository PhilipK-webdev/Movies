import styled from "styled-components";

const Container = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  @media only screen and (max-width: 106.25em) {
    overflow-y: auto;
  }
`;

export default { Container, Main };
