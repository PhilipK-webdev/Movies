import styled from "styled-components";

const Card = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 15vw;
  background: #f2f5f8;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-right: 5px;
  flex-grow: ${(props) => (props.index === 1 || props.index === 5 ? "0" : "1")};
  @media only screen and (max-width: 118.75em) {
    height: 25vh;
    flex-grow: 0;
    width: 16vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 88.875em) {
    height: 40vh;
    flex-grow: 0;
    width: 22vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 70.25em) {
    height: 30vh;
    flex-grow: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 55.375em) {
    height: 30vh;
    flex-grow: 0;
    width: 38vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 55%;
`;
const CardTitle = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.3rem;
  font-size: 0.8rem;
`;

const CardInfo = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.3rem;
  font-size: 0.7rem;
  width: 7rem;
  height: 17rem;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.3rem;
    border: 1px solid grey;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(126, 134, 150);
  }
  @media only screen and (max-width: 118.75em) {
    width: 5rem;
    height: 12rem;
  }
  @media only screen and (max-width: 106.5625em) {
    width: 5rem;
    height: 12rem;
  }
  @media only screen and (max-width: 88.875em) {
    height: auto;
    width: 8rem;
    overflow: auto;
  }
  @media only screen and (max-width: 55.375em) {
    height: 20vh;
    // overflow: auto;
  }
`;
const CardRating = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.3rem;
  font-size: 1rem;
  @media only screen and (max-width: 88.875em) {
    align-self: stretch;
    margin-top: 3rem;
  }
`;

const CardImage = styled.img`
  min-height: 20vh;
  object-fit: contain;
  @media only screen and (max-width: 118.75em) {
    width: 10vw;
    object-fit: fill;
  }
  @media only screen and (max-width: 56.25em) {
    width: 15vw;
    object-fit: fill;
  }
  @media only screen and (max-width: 37.5em) {
    height: auto;
  }
`;
export default {
  Card,
  CardTitle,
  ImageContainer,
  CardContainer,
  CardInfo,
  CardRating,
  CardImage,
};
