import styled from "styled-components";

export const SFooterMenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding-top: 23px;

  & h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 129%;
    letter-spacing: 0.02em;
    text-align: center;
    margin-bottom: 12px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 4px;
  }

  & li {
    display: flex;
    flex-direction: row;

    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    letter-spacing: 0.03em;
    color: #fff;
  }

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
  }
`;

export const SFooterMenusWrapper = styled.div`
  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 668px;
  }
`;
export const SFooterMenuCategory = styled.div`
  width: 190px;
  margin-bottom: 48px;
`;
export const SFooterMenuPlay = styled.div`
  width: 190px;
  margin-bottom: 21px;
`;
export const SFooterMenuLink = styled.div`
  width: 190px;
  margin-bottom: 37px;

  & h4 {
    line-height: 150%;
  }

  & ul {
    gap: 6px;
  }
`;

export const SFooterCopyright = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 131%;
  letter-spacing: 0.04em;
  text-align: center;
`;
