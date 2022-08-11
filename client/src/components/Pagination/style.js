import styled from "styled-components";

const Container = styled.div`
  height: 5vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-bottom: 14px;
`;

const Page = styled.span`
  margin: 0 5px;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

export default { Container, Page };
