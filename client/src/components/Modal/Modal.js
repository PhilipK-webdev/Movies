import React from "react";
import S from "./style";
function Modal({ setOpenModal, data }) {
  const { largeimage, title, synopsis, runtime, rating } = data;
  console.log("data", data);
  return (
    <S.Modal>
      <S.Container>
        <S.ModalImage>
          <S.Image />
        </S.ModalImage>
        <S.Body>
          <S.Title>dsaasdd</S.Title>
          <S.Top>dsad</S.Top>
          <S.Description>dasdsa</S.Description>
          <S.Button onClick={setOpenModal}>Back To List</S.Button>
        </S.Body>
      </S.Container>
    </S.Modal>
  );
}

export default Modal;
