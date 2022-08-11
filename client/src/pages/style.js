import styled from "styled-components";

const Container = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Main = styled.div`
  width: 73vw;
  height: 80vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%),
    inset -152px -24px 141px -67px rgb(0 0 0 / 18%);
  &::-webkit-scrollbar {
    width: 0.3rem;
    border: 1px solid grey;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(126, 134, 150);
  }
  @media only screen and (max-width: 90em) {
    height: 83vh;
    width: 85vw;
  }

  @media only screen and (max-width: 59.375em) {
    width: 85vw;
  }
  @media only screen and (max-width: 48em) {
    width: 85vw;
  }
  @media only screen and (max-width: 37.5em) {
    overflow-y: scroll;
    width: 51vw;
  }
`;

export default { Container, Main };
