import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 10px;
`;

const Page = styled.span`
  margin: 0 5px;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

export default { Container, Page };
