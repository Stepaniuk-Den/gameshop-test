import styled from "styled-components";

export const SHeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 14px 11px 17px;

  background: linear-gradient(to right, #0dd0ba, #2a86e5);
`;

export const SIconNavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5px;
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
    width: 14px;
    height: 14px;
  }
`;

export const SThemeContainer = styled.div`
  position: relative;
  display: flex;
  width: 54px;
  height: 29px;
  border-radius: 50px;
  background-color: #fff;
`;
