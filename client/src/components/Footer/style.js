import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 4rem;
  background-color: #c4d2dc;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  font-size: ${(props) => props.size};
  font-weight: 300;
  color: white;
`;

export default { Footer, Text };
