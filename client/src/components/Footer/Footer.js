import React from "react";
import S from "./style";
function Footer() {
  return (
    <S.Footer>
      <S.Text size={"1rem"}>
        &copy; Copyright Sitename.All Rights Reserved
      </S.Text>
      <S.Text aria-setsize={"0.8rem"}>Powered by OMDBAPI</S.Text>
    </S.Footer>
  );
}

export default Footer;
