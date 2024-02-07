import styled from "styled-components";

export const SContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;

  @media screen and (min-width: 767.9px) and (max-width: 1169.9px) {
    width: 768px;
  }
  @media screen and (min-width: 1169.9px) {
    width: clamp(1169.9px, 100%, 1920px);
  }
`;
