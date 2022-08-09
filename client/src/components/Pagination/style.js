import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Page = styled.span`
  margin: 0 5px;
  text-decoration: ${(props) =>
    props.pageNumber === props.currenPage ? "unset" : "underline"};
  font-size: 1rem;
  text-decoration: underline;
`;

export default { Container, Page };
