import React, { useState } from "react";
import S from "./style";
import defaultImg from "../../assets/no-picture.jpg";
function Movie({ imdbID, title, rating, image, year, onMovieClick }) {
  const [imgSrc, setImgSrc] = useState(image);
  const onError = () => setImgSrc(defaultImg);
  return (
    <S.Card onClick={() => onMovieClick(imdbID)}>
      <S.ImageContainer>
        <S.CardImage src={imgSrc ? imgSrc : defaultImg} onError={onError} />
      </S.ImageContainer>

      <S.CardContainer>
        <S.DivContainer>
          <S.CardTitle>{title}</S.CardTitle>
          <S.BtnReadMore onClick={() => onMovieClick(imdbID)}>
            More
          </S.BtnReadMore>
        </S.DivContainer>
        <S.Div>
          {year && <S.CardInfo>Year: {year}</S.CardInfo>}
          {rating && <S.CardRating>Rating: {rating}</S.CardRating>}
        </S.Div>
      </S.CardContainer>
    </S.Card>
  );
}

export default Movie;
