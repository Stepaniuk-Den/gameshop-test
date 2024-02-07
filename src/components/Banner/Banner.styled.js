import styled from "styled-components";
import BannerBackgroundLow from "../../assets/images/banner_background_low.png";
import BannerBackgroundMedium from "../../assets/images/banner_background_medium.png";
import BannerBackgroundHight from "../../assets/images/banner_background_hight.png";

export const SBannerContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1170px) {
    justify-content: flex-start;
    width: 1170px;
    height: 234px;
    margin: 0 auto;
    padding: 0;
    border-radius: 40px;
    box-shadow: 0 22px 59px 0 rgba(42, 134, 229, 0.07);
    background: #fff;
  }
`;
export const SBannerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  height: 129px;
  padding: 20px;

  border: none;
  border-radius: 30px;
  background-image: url(${BannerBackgroundLow});
  overflow: hidden;

  & p {
    display: flex;
    width: 206px;
    height: 58px;
    flex-wrap: wrap;
    margin-left: 15px;

    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #fff;
    z-index: 1;
  }

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    background-image: url(${BannerBackgroundMedium});
    width: 720px;
    height: 180px;
    padding: 30px;
    border-radius: 40px;

    & p {
      width: 518px;
      height: 42px;
      margin-left: 22px;
      font-size: 35px;
      letter-spacing: 0.01em;
    }
  }

  @media screen and (min-width: 1170px) {
    background-image: url(${BannerBackgroundHight});
    width: 1170px;
    height: 184px;
    padding: 28px 33px 35px 56px;
    & p {
      width: 606px;
      height: 36px;
      font-size: 30px;
      margin-left: 0;
      letter-spacing: 0.02em;
      color: #fff;
    }
  }
`;

export const SBannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #161c3a;
  opacity: 0.8;
`;

export const SAvatarThumb = styled.div`
  display: flex;
  width: 89px;
  height: 89px;
  border: none;
  border-radius: 10px;
  background: #753131;
  object-fit: contain;
  overflow: hidden;
  z-index: 1;

  @media screen and (min-width: 767.9px) {
    width: 120px;
    height: 120px;
  }
`;

export const SButtonBlock = styled.div`
  @media screen and (min-width: 1170px) {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    gap: 10px;
  }
`;

export const SButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;

  & li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;

    & p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 129%;
      letter-spacing: 0.04em;
      color: #fff;
      margin-left: 4px;
    }
  }
`;

export const SBannerMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1170px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 56px;
  }
`;

export const SBannerMore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px auto 15px;
  gap: 10px;
`;

export const SBannerMoreList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 13px;

  @media screen and (min-width: 1170px) {
    flex-direction: row;
    gap: 37px;
  }
`;

export const SBannerMoreItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 42px;

  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-align: center;
  background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  &.active {
    &:after {
      display: block;
      position: absolute;
      bottom: -2px;
      right: 50%;
      transform: translateX(50%);
      content: "";
      width: 23px;
      height: 5px;

      border-radius: 40px;

      background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);
    }
  }

  @media screen and (min-width: 1170px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-align: center;
    color: #707070;
    background: none;
    background-clip: border-box;
    -webkit-text-fill-color: inherit;
  }

  &.active {
    &:after {
      display: none;
    }
  }

  &:not(:first-child)::before {
    display: block;
    position: absolute;
    top: 50%;
    left: -17px;
    transform: translateY(-50%);
    content: "";
    width: 1px;
    height: 21px;
    background: #707070;
  }
`;
