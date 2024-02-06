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
`;

export const SFooterMenuCategory = styled.div`
  margin-bottom: 48px;
`;
export const SFooterMenuPlay = styled.div`
  margin-bottom: 21px;
`;
export const SFooterMenuLink = styled.div`
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
