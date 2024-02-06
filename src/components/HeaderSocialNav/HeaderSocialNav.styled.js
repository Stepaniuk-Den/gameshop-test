import styled from "styled-components";

export const SHeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 14px 11px 17px;

  background: linear-gradient(to right, #0dd0ba, #2a86e5);

  @media screen and (min-width: 767.9px) and (max-width: 1239.9px) {
    padding-left: 24px;
    justify-content: flex-start;
  }
`;

export const SIconNavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media screen and (min-width: 767.9px) and (max-width: 1239.9px) {
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
