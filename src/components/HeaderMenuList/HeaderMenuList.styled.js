import styled from "styled-components";

export const SMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  & li {
    line-height: 1.4;
    color: #2a86e5;
  }

  @media screen and (min-width: 1170px) {
    flex-direction: row;
    justify-content: center;
    margin: 0;
    gap: 28px;
  }
`;
