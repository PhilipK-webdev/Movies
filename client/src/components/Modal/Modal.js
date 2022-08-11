import React, { useState } from "react";
import S from "./style";
import defaultImg from "../../assets/no-picture.jpg";
function Modal({ setOpenModal, data }) {
  const { Poster, Title, Plot, Awards, Actors } = data;
  const [imgSrc, setImgSrc] = useState(Poster);
  const onError = () => setImgSrc(defaultImg);
  return (
    <S.Modal>
      <S.Container>
        <S.ModalImage>
          <S.Image src={imgSrc ? imgSrc : defaultImg} onError={onError} />
        </S.ModalImage>
        <S.Body>
          <S.Title>{Title}</S.Title>
          <S.Top>Awards: {Awards}</S.Top>
          <S.Top>Actors: {Actors}</S.Top>
          <S.Description>
            Plot:
            <br />
            {Plot}
          </S.Description>
          <S.Button onClick={setOpenModal}>Back To List</S.Button>
        </S.Body>
      </S.Container>
    </S.Modal>
  );
}

export default Modal;
