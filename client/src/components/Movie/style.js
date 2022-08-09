import styled from "styled-components";

const Card = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
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
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 88.875em) {
    height: 40vh;
    flex-grow: 0;
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 68.75em) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 68.75em) {
    height: 40vh;
    flex-grow: 0;
    width: 30vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.3rem;
  font-size: 1rem;
`;
export default { Card, CardHeader };
