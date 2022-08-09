import React from "react";
import S from "./style";
function Movie({ movieId, title, rating, image, plot, onMovieClick }) {
  return (
    <S.Card>
      <S.ImageContainer>
        <S.CardImage src={image} />
      </S.ImageContainer>
      <S.CardContainer>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardInfo>{plot}</S.CardInfo>
        <S.CardRating>Rating: {rating}</S.CardRating>
      </S.CardContainer>
    </S.Card>
  );
}

export default Movie;
