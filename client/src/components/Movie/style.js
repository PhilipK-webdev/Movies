import styled from "styled-components";

const Card = styled.div`
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 18rem;
  background: #0d0d0d;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-right: 5px;
  color: white;
  flex-grow: ${(props) => (props.index === 1 || props.index === 5 ? "0" : "1")};
  cursor: pointer;
  @media only screen and (max-width: 118.75em) {
    height: 13rem;
    width: 18rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 106.25em) {
    // height: 25vh;
    width: 15rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 88.875em) {
    height: 13rem;
    width: 13rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 75.25em) {
    height: 13rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 55.375em) {
    height: 13rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -1rem;
    margin-top: 1rem;
  }
`;
const ImageContainer = styled.div`
  display: inline-block;
`;
const CardContainer = styled.div`
  display: flex;
  height: 3rem;
  padding: 0.5rem;
  justify-content: center;
  flex-direction: column;
`;
const CardTitle = styled.header`
  font-size: 0.8rem;
  font-weight: bold;
  font-weight: bold;
  @media only screen and (max-width: 106.5625em) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 88.875em) {
    width: 10rem;
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 68.75em) {
    width: 10rem;
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 55.375em) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 0.7rem;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardInfo = styled.section`
  font-size: 1rem;
  margin-right: 1rem;
  &::-webkit-scrollbar {
    width: 0.3rem;
    border: 1px solid grey;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(126, 134, 150);
  }
  // @media only screen and (max-width: 118.75em) {
  //   width: 5rem;
  //   height: 18rem;
  // }
  // @media only screen and (max-width: 106.5625em) {
  //   width: 8rem;
  //   height: 20rem;
  // }
  // @media only screen and (max-width: 88.875em) {
  //   height: 18rem;
  //   width: 8rem;
  //   overflow: auto;
  // }
  @media only screen and (max-width: 75.25em) {
    font-size: 0.8rem;
  }
  // @media only screen and (max-width: 68.75em) {
  //   height: 10vh;
  //   width: auto;
  //   font-size: 1rem;
  // }
  // @media only screen and (max-width: 55.375em) {
  //   height: auto;
  // }
`;
const CardRating = styled.div`
  font-size: 1rem;
  @media only screen and (max-width: 68.75em) {
    font-size: 0.8rem;
  }
  // @media only screen and (max-width: 55.375em) {
  //   font-size: 0.8rem;
  // }
`;

const CardImage = styled.img`
  width: 100%;
  height: 14rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media only screen and (max-width: 118.75em) {
    height: 8rem;
  }
  @media only screen and (max-width: 75.25em) {
    height: 8rem;
  }
  @media only screen and (max-width: 56.25em) {
    height: 8rem;
  }
  @media only screen and (max-width: 37.5em) {
    height: 8rem;
  }
`;

const BtnReadMore = styled.button`
  margin-left: 1rem;
  border: none;
  background: white;
  color: black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  height: 1.5rem;
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
};
