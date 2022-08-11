import styled from "styled-components";

const Container = styled.div`
  height: 5vh;
  text-align: center;
  display: flex;
  justify-content: ${(props) => (props.size < 20 ? "center" : "flex-start")};
  align-items: center;

  margin-bottom: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 0.6rem;
    border: 1px solid grey;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(126, 134, 150);
  }
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
`;

const Page = styled.span`
  margin: 0 5px;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => (props.currentPage === props.index ? "red" : "black")};
`;

export default { Container, Page };
