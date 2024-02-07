import styled, { css } from "styled-components";

export const SHeaderNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, #0dd0ba, #2a86e5);
`;
export const SHeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 380px;
  padding: 10px 14px 11px 17px;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    justify-content: flex-start;
    width: 768px;
    padding-left: 24px;
  }

  @media screen and (min-width: 1170px) {
    width: 1170px;
    padding: 10px 0;
  }
`;

export const SIconNavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media screen and (min-width: 767.9px) {
    margin-left: auto;
  }
`;

export const SIconNavItem = styled.li`
  display: flex;
  width: 29px;
  height: 29px;
  justify-content: center;
  align-items: center;

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
`;

export const SThemeContainer = styled.div`
  position: relative;
  display: flex;
  width: 54px;
  height: 29px;
  border-radius: 50px;
  background-color: #fff;

  @media screen and (min-width: 767.9px) and (max-width: 1239.9px) {
    margin-left: 15px;
  }

  @media screen and (min-width: 1170px) {
    margin-left: 20px;
  }
`;

export const SThemeSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 2px;
  left: 3px;
  right: 0;
  bottom: 0;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;

  ${(props) =>
    props.theme === "dark" &&
    css`
      left: 23px;
    `};
`;

export const SHeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 23px;
  color: #fff;
`;

export const SHeaderItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.04em;

  & span {
    display: flex;
    justify-content: center;
    padding-right: 4px;
  }
`;
