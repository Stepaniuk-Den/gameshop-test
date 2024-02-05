import styled from "styled-components";

export const SBannerItemDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;

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
`;

export const SpDetails = styled.p`
  margin-bottom: 60px;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.03em;
`;

export const SBannerCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;