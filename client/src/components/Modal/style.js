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
  padding: 25px;
  & > img {
    height: 490px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 50% 0;
  height: 100%;
  align-items: initial;
  font-size: 1.3rem;
  text-align: initial;
  @media only screen and (max-width: 88.875em) {
    font-size: 15px;
  }
`;

const Top = styled.p`
  display: flex;
  margin-left: 10px;
`;
const ModalImage = styled.div`
  display: inline-block;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
`;
const Title = styled.div`
  font: normal normal bold 2.8125rem/2.8125rem Arial;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  width: 39vw;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 88.875em) {
    margin-bottom: 10px;
  }
`;
const Description = styled.p`
  overflow: auto;
  height: 100%;
  max-height: 290px;
  padding-top: 16px;
  margin-left: 10px;
  font: normal normal normal 1.875rem/1.875rem Georgia;
  @media only screen and (max-width: 88.875em) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 7vh;
  align-items: center;
  border: none;
  font-size: 1.3rem;
  background-color: #ff206f;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 88.875em) {
    font-size: 1rem;
  }
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
