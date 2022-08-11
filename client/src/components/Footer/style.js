import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 7vh;
  background-color: #c4d2dc;
  width: 100%;
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  font-size: ${(props) => props.size};
  font-weight: 300;
  color: white;
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
  }
`;

export default { Footer, Text };
