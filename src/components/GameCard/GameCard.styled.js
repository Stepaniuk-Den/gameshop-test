import styled from "styled-components";

export const SCardContainer = styled.li``;

export const SCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 305px;
  padding: 20px;

  border-radius: 20px;
  box-shadow: 0 3px 16px 0 rgba(42, 134, 229, 0.08);
  background: #fff;

  & h3 {
    margin: 18px auto 10px;
    font-weight: 700;
    font-size: 22px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #2a86e5;
  }

  @media screen and (min-width: 1170px) {
    width: 387px;
    height: 279px;
  }
`;

export const SCardThumb = styled.div`
  display: flex;
  width: 310px;
  height: 171px;
  border: none;
  border-radius: 20px;

  object-fit: contain;
  overflow: hidden;

  @media screen and (min-width: 1170px) {
    width: 347px;
  }
`;

export const SCardDetails = styled.div`
  display: flex;
  flex-direction: row;

  gap: 22px;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }

  & p {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #b3b3b1;
  }
`;
