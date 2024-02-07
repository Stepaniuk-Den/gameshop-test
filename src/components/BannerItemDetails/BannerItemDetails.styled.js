import styled from "styled-components";

export const SBannerItemDetailsContainer = styled.section`
  display: flex;
  @media screen and (min-width: 1170px) {
    width: 1170px;
    margin-top: 46px;
  }
`;
export const SBannerItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px 130px;

  & h2 {
    margin-bottom: 20px;
    font-weight: 900;
    font-size: 35px;

    line-height: 130%;
    letter-spacing: 0.01em;
    text-align: center;
    background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 767.9px) {
    padding: 30px 20px 130px 20px;
    align-items: flex-start;
    & h2 {
      font-size: 42px;
      line-height: 129%;
    }
  }

  @media screen and (min-width: 1170px) {
    width: 810px;
    padding-top: 0;
  }
`;

export const SpRoute = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.04em;
  text-align: center;
  & span {
    font-weight: 700;
  }

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    text-align: start;
  }
`;

export const SpDetails = styled.p`
  margin-bottom: 60px;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.03em;
`;

export const SpArticles = styled.p`
  position: relative;
  margin: 5px auto 37px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: 0.03em;
  color: #707070;

  &:after {
    display: block;
    position: absolute;
    bottom: -17px;
    left: 0;
    content: "";
    width: 43px;
    height: 8px;

    border-radius: 20px;

    background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);
  }
`;

export const SBannerCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 28px;
    row-gap: 20px;
  }
`;
