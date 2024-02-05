import React from "react";
import {
  SBannerCardList,
  SBannerItemDetailsContainer,
  SpDetails,
  SpRoute,
} from "./BannerItemDetails.styled";
import GameCard from "../GameCard/GameCard";

const BannerItemDetails = ({ itemName }) => {
  return (
    <SBannerItemDetailsContainer>
      <SpRoute>
        Home &gt; Lorem Ipsum is &gt; <span>{itemName}</span>
      </SpRoute>
      <h2>{itemName}</h2>
      <SpDetails>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </SpDetails>
      <SBannerCardList>
        {/* якщо якісь дані з бека то можна буде мапнути */}
        <GameCard itemName={itemName} />
        <GameCard itemName={itemName} />
        <GameCard itemName={itemName} />
        <GameCard itemName={itemName} />
      </SBannerCardList>
    </SBannerItemDetailsContainer>
  );
};

export default BannerItemDetails;
