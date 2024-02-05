import React from "react";
import {
  SCardContainer,
  SCardDetails,
  SCardThumb,
  SCardWrapper,
} from "./GameCard.styled";
import PhotoCardLow from "../../assets/images/PhotoCard_low.png";
import Icons from "../../assets/icons/icons.svg";

const GameCard = ({ itemName }) => {
  return (
    <SCardContainer>
      <SCardWrapper>
        <SCardThumb>
          <img src={PhotoCardLow} alt="card" />
        </SCardThumb>
        <h3>{itemName}</h3>
        <SCardDetails>
          <p>
            <span>
              <svg width={14} height={14}>
                <use href={Icons + "#user"} />
              </svg>
            </span>
            ALCO
          </p>
          <p>
            <span>
              <svg width={14} height={14}>
                <use href={Icons + "#clock"} />
              </svg>
            </span>
            26 JANVIER 2023
          </p>
        </SCardDetails>
      </SCardWrapper>
    </SCardContainer>
  );
};

export default GameCard;
