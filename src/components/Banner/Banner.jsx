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
  SButtonBlock,
  SButtonList,
} from "./Banner.styled";

import GamePhoto1 from "../../assets/images/game_photo_1.webp";
import Button from "../Button/Button";
import Icons from "../../assets/icons/icons.svg";
import BannerItemDetails from "../BannerItemDetails/BannerItemDetails";
import { useMediaQuery } from "react-responsive";
import BannerRating from "../BannerRating/BannerRating";

const Banner = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1170 });

  const itemName = "Lorem Ipsum is simply dummy";

  const handleToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const switchText = (text) => {
    switch (text) {
      case "android":
        return (
          <>
            <span>
              <svg width={16} height={16}>
                <use href={Icons + "#android"} />
              </svg>
            </span>
            <p>Android</p>
          </>
        );
      case "ios":
        return (
          <>
            <span>
              <svg width={16} height={16}>
                <use href={Icons + "#apple"} />
              </svg>
            </span>
            <p>iOS</p>
          </>
        );
      case "pc":
        return (
          <>
            <span>
              <svg width={15} height={15}>
                <use href={Icons + "#download"} />
              </svg>
            </span>
            <p>Download on PC</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SBannerContainer>
        {isDesktop && <BannerRating />}
        <SBannerWrapper>
          <SBannerOverlay />
          <SAvatarThumb>
            <img src={GamePhoto1} alt="game avatar 1" />
          </SAvatarThumb>
          {isDesktop ? (
            <SButtonBlock>
              <p>{itemName}</p>
              <SButtonList>
                <li>
                  <Button
                    className={"button-android"}
                    text={switchText("android")}
                  />
                </li>
                <li>
                  <Button className={"button-ios"} text={switchText("ios")} />
                </li>
                <li>
                  <Button className={"button-pc"} text={switchText("pc")} />
                </li>
              </SButtonList>
            </SButtonBlock>
          ) : (
            <p>{itemName}</p>
          )}
        </SBannerWrapper>
        <SBannerMoreContainer>
          {!isDesktop && (
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
          )}
          {isShowMenu || isDesktop ? (
            <SBannerMoreList>
              <SBannerMoreItem className="active">{itemName}</SBannerMoreItem>
              <SBannerMoreItem id="2">Item</SBannerMoreItem>
              <SBannerMoreItem id="3">Item</SBannerMoreItem>
              <SBannerMoreItem id="4">Item</SBannerMoreItem>
              <SBannerMoreItem id="5">Item</SBannerMoreItem>
            </SBannerMoreList>
          ) : null}
        </SBannerMoreContainer>
      </SBannerContainer>
      <BannerItemDetails itemName={itemName} />
    </>
  );
};

export default Banner;
