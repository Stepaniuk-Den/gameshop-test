import styled from "styled-components";

export const SRatingContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: red; */
  width: 269px;
  height: 170px;
  bottom: 8px;
  right: 30px;
  z-index: 2;
`;

export const SRatingVotes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 0 auto;
`;
export const SRatingVotesThumb = styled.div`
  display: flex;
  width: 86px;
  height: 85px;
`;
export const SRatingNoteThumb = styled.div`
  display: flex;
  width: 269px;
  height: 35px;
  border-radius: 17px;
`;

export const SRatingPlayers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpPlayers = styled.p`
  font-weight: 800;
  font-size: 24px;
  color: #fff;
`;
export const SpVotes = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;
export const SpRating = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #fff;

  & span {
    font-weight: 700;
    font-size: 20px;
    color: #f9b936;
  }
`;
