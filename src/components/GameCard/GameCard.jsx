import React from "react";
import {
  SCardContainer,
  SCardDetails,
  SCardThumb,
  SCardWrapper,
} from "./GameCard.styled";
import PhotoCardLow from "../../assets/images/PhotoCard_low.png";
import PhotoCardHight from "../../assets/images/PhotoCard_hight.png";
import Icons from "../../assets/icons/icons.svg";
import { useMediaQuery } from "react-responsive";

const GameCard = ({ itemName }) => {
  const isDesktop = useMediaQuery({ minWidth: 1170 });
  return (
    <SCardContainer>
      <SCardWrapper>
        <SCardThumb>
          {isDesktop ? (
            <img src={PhotoCardHight} alt="card" />
          ) : (
            <img src={PhotoCardLow} alt="card" />
          )}
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
