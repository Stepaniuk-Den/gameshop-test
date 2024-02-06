import styled from "styled-components";

export const SFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    padding: 28px 20px;
  }
`;

export const SFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 1074px;
  padding: 20px;

  border-radius: 40px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.16);
  background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    width: 728px;
    height: 640px;
    padding: 30px 22px 40px;
  }
`;

export const SFooterSocialCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 376px;
  padding: 0px 28px 27px;

  border-radius: 20px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.16);
  background: #fff;

  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 144%;
    letter-spacing: 0.03em;
    color: #0dd0ba;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    /* display: flex;
    flex-direction: column; */
    width: 668px;
    height: 309px;
    padding: 0;
    align-items: center;

    & p {
      width: 525px;
      text-align: center;
    }
  }
`;

export const SFooterLogo = styled.span`
  margin: 72px auto 65px;
  font-weight: 400;
  font-size: 30px;
  line-height: 77%;
  letter-spacing: 0.02em;
  text-align: center;
  color: #000;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    margin: 58px auto 54px;
  }
`;

export const SFooterNavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 12px;
`;

export const SFooterNavItem = styled.li`
  display: flex;
  width: 37px;
  height: 37px;
  justify-content: center;
  align-items: center;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
`;
