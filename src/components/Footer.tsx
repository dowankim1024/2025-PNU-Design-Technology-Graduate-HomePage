import styled from "styled-components";
import Logo from "@/assets/FooterLogo.png";
import Instagram from "@/assets/Icons/Instagram.png";
import Youtube from "@/assets/Icons/Youtube.png";
import PNU from "@/assets/Icons/PNU.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterExplain>
          <FooterLogo src={Logo} alt="footerLogo" />
          <FooterText>
            부산대학교 디자인학과 디자인앤테크놀로지 전공 16회 졸업전시{" "}
            <br></br>
            Dept. of Design, Design and Technology 16th Graduation Show
          </FooterText>
          <FooterTextBold>
            본 사이트는 2025 졸업논문을 대체합니다.<br></br> ©2025 Pusan
            National University Design&Technology all rights reserved.
          </FooterTextBold>
        </FooterExplain>
        <FooterIconsContainer>
          <FooterIcons>
            <FooterIcon src={Instagram} alt="footerIcon" />
            <FooterIcon src={Youtube} alt="footerIcon" />
          </FooterIcons>
          <FooterLink>
            <FooterIcon src={PNU} alt="footerIcon" />
            <PNULink href="https://www.pusan.ac.kr" target="_blank">
              부산대학교 디자인학과 공식 홈페이지
            </PNULink>
          </FooterLink>
        </FooterIconsContainer>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 20.83vw; /* 400px / 1920px * 100 = 20.83% */
  background-color: #080404;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 5.21vw; /* 100px / 1920px * 100 = 5.21% */
  box-sizing: border-box;
`;

const FooterExplain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const FooterLogo = styled.img`
  width: 7.29vw; /* 140px / 1920px * 100 = 7.29% */
  height: auto;
`;

const FooterText = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Regular;
  color: #fff;
  margin-top: 2.11vw; /* 40.5px / 1920px * 100 = 2.11% */
  opacity: 0.5;
`;

const FooterTextBold = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Regular;
  color: #fff;
  margin-top: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  opacity: 0.5;
`;
const FooterIconsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
`;
const FooterIcon = styled.img`
  width: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  height: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
`;
const FooterLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.42vw; /* 8px / 1920px * 100 = 0.42% */
  margin-top: 6.46vw; /* 124px / 1920px * 100 = 6.46% */
`;
const PNULink = styled.a`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Regular;
  color: #fff;
`;
