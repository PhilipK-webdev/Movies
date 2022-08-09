import styled from "styled-components";
const Header = styled.header`
  height: 5rem;
  background-color: #c4d2dc;
  padding: 1.3rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 300;
  color: white;
  @media only screen and (max-width: 56.25em) {
    justify-content: center;
  }
`;
export default { Header };
