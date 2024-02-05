import styled from "styled-components";

export const SPlatformList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto 57px;
`;

export const SPlatformItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 130px;

  line-height: 100%;
  letter-spacing: 0.03em;

  & span {
    display: flex;
    justify-content: center;
    padding-right: 4px;
  }

  & svg {
  }
`;
