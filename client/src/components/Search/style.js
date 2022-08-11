import styled from "styled-components";

const Container = styled.div`
  width: 61vw;
  height: 3vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2vh;
  @media only screen and (max-width: 90em) {
    height: 4vh;
    margin-top: -3vh;
  }
  @media only screen and (max-width: 37.5em) {
    width: 50vw;
  }
`;

const From = styled.form`
  display: flex;
`;
const TextInput = styled.input`
  width: 55vw;
  height: 5vh;
  padding: 12px;
  padding-left: 40px;
  color: black;
  font-size: 1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid rgba(214, 25, 105, 0.5);
  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem gray;
  }
  &::placeholder {
    font-size: 1.2rem;
    color: black;
  }
  @media only screen and (max-width: 88.875em) {
    &::placeholder {
      font-size: 15px;
      color: black;
    }
  }
  @media only screen and (max-width: 64em) {
    width: 55vw;
  }
  @media only screen and (max-width: 55.375em) {
    width: 58vw;
  }
  @media only screen and (max-width: 48em) {
    width: 58vw;
  }
  @media only screen and (max-width: 37.5em) {
    height: 3vh;
    width: 30vw;
    font-size: 10px;
    padding-left: 0px;
    &::placeholder {
      font-size: 10px;
      color: black;
    }
  }
`;
const Button = styled.button`
  width: 5vw;
  border: none;
  background-color: ${(props) => (props.isDisabled ? "#DDE7F0" : "#FF206F")};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  height: 5vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: ${(props) => (props.boolean ? "space-between" : "center")};
  align-items: center;
  @media only screen and (max-width: 88.875em) {
    font-size: 12px;
    width: 6vw;
  }
  @media only screen and (max-width: 37.5em) {
    width: 20vw;
    height: 3vh;
  }
`;

export default { Container, From, TextInput, Button };
