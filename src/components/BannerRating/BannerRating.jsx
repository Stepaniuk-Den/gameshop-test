import React from "react";
import {
  SRatingContainer,
  SRatingVotes,
  SRatingPlayers,
  SpPlayers,
  SpVotes,
  SpRating,
  SRatingVotesThumb,
  SRatingNoteThumb,
} from "./BannerRating.styled";

import Rating from "../../assets/images/banner_rating.png";
import Note from "../../assets/images/banner_note.png";

const BannerRating = () => {
  return (
    <SRatingContainer>
      <SRatingVotes>
        <SRatingVotesThumb>
          <img src={Rating} alt="votes" />
        </SRatingVotesThumb>
        <SRatingPlayers>
          <SpPlayers>Players</SpPlayers>
          <SpVotes>12 votes</SpVotes>
          <SpRating>
            Your rating:<span> 5.2</span>
          </SpRating>
        </SRatingPlayers>
      </SRatingVotes>
      <SRatingNoteThumb>
        <img src={Note} alt="votes" />
      </SRatingNoteThumb>
    </SRatingContainer>
  );
};

export default BannerRating;
