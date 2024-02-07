import styled from "styled-components";

export const SHeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
  }

  @media screen and (min-width: 1170px) {
    flex-direction: row;
    justify-content: space-between;
    width: 1170px;
    margin: 0 auto;
    padding: 31px 0 37px 0;
  }
`;
export const SHeaderMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 28px 15px 15px;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    padding: 20px;
  }

  @media screen and (min-width: 1170px) {
    justify-content: flex-start;
    padding: 0;
  }
`;

export const SLogo = styled.span`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 77%;
  letter-spacing: 0.02em;
  color: #000;

  @media screen and (min-width: 1170px) {
    font-size: 400;
  }
`;

export const SHeaderInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px 55px 15px;

  @media screen and (min-width: 1170px) {
    flex-direction: row-reverse;
    width: 975px;
    padding: 0;
    justify-content: space-between;
  }
`;

export const SLabel = styled.label`
  position: relative;
  display: flex;

  & svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  @media screen and (min-width: 1170px) {
    width: 176px;
    height: 42px;
  }
`;

export const SInput = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 40px;
  background-color: #eeeeee;
  color: #757575;

  font-weight: 400;
  font-size: 16px;
  line-height: 131%;
  padding-left: 21px;
`;
