import styled from "styled-components";

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
  height: 28px;
  border-radius: 17px;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.button-android {
    width: 99px;
    padding: 5px 16px 5px 13px;
    border: 1px solid #fff;
  }

  &.button-ios {
    width: 70px;
    padding: 5px 16px 5px 13px;
    border: 1px solid #fff;
  }

  &.button-pc {
    width: 162px;
    padding: 5px 16px 5px 13px;
    background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);
    border: 1px solid #fff;
  }
`;
