import styled from "styled-components";

const Container = styled.div`
  overflow: auto;
  height: 87vh;
`;

const Main = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  @media only screen and (max-width: 75em) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 68.75em) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export default { Container, Main };
