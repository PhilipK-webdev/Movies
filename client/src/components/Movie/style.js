import styled from "styled-components";

const Card = styled.div`
  height: 34vh;
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: #0d0d0d;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 2vh;
  margin-right: 5px;
  color: white;
  flex-grow: ${(props) => (props.index === 1 || props.index === 5 ? "0" : "1")};
  cursor: pointer;
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 84.375em) {
    height: 28vh;
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 48em) {
    height: 30vh;
    width: 12vw;
  }
  @media only screen and (max-width: 37.5em) {
    width: auto;
  }
`;
const ImageContainer = styled.div`
  display: inline-block;
`;
const CardContainer = styled.div`
  display: flex;
  height: 14vh;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;
const CardTitle = styled.header`
  font-size: 0.8rem;
  font-weight: bold;
  font-weight: bold;
  @media only screen and (max-width: 90em) {
    font-size: 10px;
    width: 7vw;
  }
  @media only screen and (max-width: 48em) {
    font-size: 10px;
    width: 10vw;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 13px;
    width: 20vw;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardInfo = styled.section`
  font-size: 0.8rem;
  margin-right: 10px;
  order: 1px solid white;
  width: 5vw;
  display: flex;
  align-self: center;
  @media only screen and (max-width: 88.875em) {
    font-size: 10px;
  }
  @media only screen and (max-width: 48em) {
    font-size: 8px;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 10px;
  }
`;
const CardRating = styled.div`
  font-size: 0.8rem;
  width: 5vw;
  margin-right: 3px;
  @media only screen and (max-width: 88.875em) {
    font-size: 10px;
  }
  @media only screen and (max-width: 48em) {
    width: 7vw;
    margin-right: 0px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 25vh;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media only screen and (max-width: 88.875em) {
    height: 20vh;
  }
  @media only screen and (max-width: 75.25em) {
    height: 15vh;
  }
  @media only screen and (max-width: 48em) {
    height: 18vh;
  }
  @media only screen and (max-width: 37.5em) {
    height: 15vh;
  }
`;

const BtnReadMore = styled.button`
  border: none;
  background: transparent;
  color: white;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 2px;
  margin-right: -7px;
  @media only screen and (max-width: 88.875em) {
    font-size: 10px;
    margin-top: 3px;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 15px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export default {
  Card,
  CardTitle,
  ImageContainer,
  CardContainer,
  CardInfo,
  CardRating,
  CardImage,
  Div,
  BtnReadMore,
  DivContainer,
};
