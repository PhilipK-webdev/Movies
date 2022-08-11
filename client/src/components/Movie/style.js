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
  @media only screen and (max-width: 88.875em) {
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
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
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
    font-size: 10px;
    width: 7vw;
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
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
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
    font-size: 10px;
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
  }
`;
const CardRating = styled.div`
  font-size: 0.8rem;
  width: 5vw;
  margin-right: 3px;
  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
    font-size: 10px;
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 25vh;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media only screen and (max-width: 118.75em) {
  }
  @media only screen and (max-width: 106.25em) {
  }
  @media only screen and (max-width: 88.875em) {
    height: 20vh;
  }
  @media only screen and (max-width: 75.25em) {
  }
  @media only screen and (max-width: 55.375em) {
  }
  @media only screen and (max-width: 37.5em) {
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
