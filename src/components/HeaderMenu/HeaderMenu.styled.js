import styled from "styled-components";

export const SHeaderMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 28px 15px 15px;
`;

export const SLogo = styled.span`
  font-size: 400;
  color: #000;
`;

export const SHeaderInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px 55px 15px;
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
