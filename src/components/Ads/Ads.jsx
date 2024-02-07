import React from "react";
import { SAdsContainer, SAdsDetails } from "./Ads.styled";
import AdsImg from "../../assets/images/ads-image.png";

const Ads = () => {
  return (
    <SAdsContainer>
      <img src={AdsImg} alt="ads" />
      <SAdsDetails>
        <h2>ADS</h2>
        <p>300x600</p>
      </SAdsDetails>
    </SAdsContainer>
  );
};

export default Ads;
