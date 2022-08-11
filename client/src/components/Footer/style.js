import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 7vh;
  background-color: #c4d2dc;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.size};
  font-weight: 300;
  color: white;
  @media only screen and (max-width: 88.875em) {
    font-size: 12px;
    padding-top: 0px;
  }
`;

export default { Footer, Text };
