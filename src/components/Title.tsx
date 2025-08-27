import styled from "styled-components";

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  margin-top: 5.21vw; /* 100px / 1920px * 100 = 5.21% */
  margin-left: 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  @media (max-width: 768px) {
    font-size: 20px;
    align-self: center;
    margin-top: 40px;
    margin-left: 0;
  }
`;
