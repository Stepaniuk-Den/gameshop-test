import styled from "styled-components";

export const SAdsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 600px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(110deg, #fcb738 0%, #ef793c 100%);
  overflow: hidden;
`;
export const SAdsDetails = styled.div`
  position: absolute;

  & h2 {
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;
    letter-spacing: 0.01em;
    text-align: center;
    color: #fcfcfc;
    margin-bottom: 18px;
  }

  & p {
    font-weight: 700;
    font-size: 40px;
    line-height: 57%;
    letter-spacing: 0.01em;
    text-align: center;
    color: #fcfcfc;
  }
`;
