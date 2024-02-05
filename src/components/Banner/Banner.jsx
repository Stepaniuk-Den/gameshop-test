import React, { useState } from "react";
import {
  SAvatarThumb,
  SBannerContainer,
  SBannerMore,
  SBannerMoreContainer,
  SBannerMoreItem,
  SBannerMoreList,
  SBannerOverlay,
  SBannerWrapper,
} from "./Banner.styled";

import GamePhoto1 from "../../assets/images/game_photo_1.png";
import Button from "../Button/Button";
import Icons from "../../assets/icons/icons.svg";
import BannerItemDetails from "../BannerItemDetails/BannerItemDetails";

const Banner = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const itemName = "Lorem Ipsum is simply dummy";

  const handleToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <SBannerContainer>
      <SBannerWrapper>
        <SBannerOverlay />
        <SAvatarThumb>
          <img src={GamePhoto1} alt="game avatar 1" />
        </SAvatarThumb>
        <p>{itemName}</p>
      </SBannerWrapper>
      <SBannerMoreContainer>
        <SBannerMore>
          <p>More info</p>
          <Button
            onClick={handleToggleMenu}
            text={
              <svg width={32} height={32}>
                <use href={Icons + "#burger-more"} />
              </svg>
            }
          />
        </SBannerMore>
        {isShowMenu && (
          <SBannerMoreList>
            <SBannerMoreItem>{itemName}</SBannerMoreItem>
            <SBannerMoreItem>Item</SBannerMoreItem>
            <SBannerMoreItem>Item</SBannerMoreItem>
            <SBannerMoreItem>Item</SBannerMoreItem>
            <SBannerMoreItem>Item</SBannerMoreItem>
          </SBannerMoreList>
        )}
      </SBannerMoreContainer>
      <BannerItemDetails itemName={itemName} />
    </SBannerContainer>
  );
};

export default Banner;
