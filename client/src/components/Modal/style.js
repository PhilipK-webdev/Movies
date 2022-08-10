import styled from "styled-components";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000c4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1;
  left: 0;
`;
const Container = styled.div`
  width: 65vw;
  height: 65vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  padding: 25px;

  & > img {
    height: 490px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid;
  flex: 50% 0;
  height: 100%;
  align-items: initial;
  font-size: 1.7rem;
  text-align: initial;
`;

const Top = styled.div`
  border: 1px solid red;
  & > * {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
const ModalImage = styled.div`
  border: 1px solid green;
  height: 35rem;
  width: 30rem;
`;
const Image = styled.img`
  height: 490px;
`;
const Title = styled.div`
  font: normal normal bold 2.8125rem/2.8125rem Arial;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  border: 1px solid green;
`;
const Description = styled.div`
  overflow: auto;
  height: 100%;
  max-height: 290px;
  padding-top: 16px;
  font: normal normal normal 1.875rem/1.875rem Georgia;
  border: 1px solid orange;
`;

const Button = styled.button`
  width: 5rem;
  height: 2rem;
  display: flex;
  align-self: flex-end;
`;
export default {
  Modal,
  Container,
  Body,
  Top,
  Title,
  Description,
  ModalImage,
  Image,
  Button,
};
