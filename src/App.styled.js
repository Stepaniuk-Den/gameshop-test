import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  outline: 1px solid aquamarine;

  @media screen and (min-width: 767.9px) and (max-width: 1239.9px) {
    width: 768px;
  }
  @media screen and (min-width: 767.9px) {
    width: 768px;
  }
`;
