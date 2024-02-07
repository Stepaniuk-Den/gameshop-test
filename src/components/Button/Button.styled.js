import styled from "styled-components";

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;

  height: 28px;
  border: 1px solid #fff;
  border-radius: 17px;
  padding: 5px 16px 5px 13px;

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
  }

  &.button-ios {
    width: 70px;
  }

  &.button-pc {
    width: 162px;
    background: linear-gradient(90deg, #0dd0ba 0%, #2a86e5 100%);
  }
`;
