import styled from "styled-components";

const Container = styled.div`
  width: 85vw;
  height: 5vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const From = styled.form`
  @media only screen and (max-width: 56.25em) {
    display: flex;
    jusitfy-content: center;
    align-items: center;
    flex-direction: row;
    height: 13vh;
  }
`;
const TextInput = styled.input`
  border: 0;
  width: 70vw;
  padding: 12px;
  padding-left: 40px;
  border-radius: 10px;
  margin: 1rem 1rem;
  color: black;
  font-size: 1rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem gray;
  }
  &::placeholder {
    font-size: 1.2rem;
    color: black;
  }

  @media only screen and (max-width: 56.25em) {
    // width: 50vw;
    // margin-right: 1rem;
  }
`;
const Button = styled.input`
  width: 6vw;
  border-radius: 10px;
  border: none;
  background-color: #ff206f;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (max-width: 56.25em) {
    text-align: center;
    width: 13vw;
    margin-top: 0.3rem;
  }
`;

export default { Container, From, TextInput, Button };
