import styled from "styled-components";
import Brand from "@/assets/Home/Brand.png";
import All from "@/assets/Home/All.png";
import Video from "@/assets/Home/Video.png";
import DP from "@/assets/Home/DP.png";
import Web from "@/assets/Home/Web.png";
import Logo from "@/assets/Home/CloseUp.png";
import Scroll from "@/assets/Home/Scroll.png";
import Other from "@/assets/Home/Other.png";
export const Main = () => {
  return (
    <Container>
      <OtheImage src={Other} alt="othe" />
      <BrandImg src={Brand} alt="brand" />
      <AllImg src={All} alt="all" />
      <VideoDP>
        <VideoImg src={Video} alt="video" />
        <DPImg src={DP} alt="dp" />
      </VideoDP>
      <WebImg src={Web} alt="web" />
      <LogoImg src={Logo} alt="logo" />
      <Major>
        Design & <br /> Technology
      </Major>
      <Opening>
        <OpeningText>Opening_오프닝</OpeningText>
        <OpeningText2>
          2025/11/14 & <br /> 6pm
        </OpeningText2>
      </Opening>
      <Place>
        Design Center Busan
        <br />
        1F Exhibition hall
      </Place>
      <ScrollIcon src={Scroll} alt="scroll" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -6.25vw; /* -120px @1920 */
  margin-bottom: 3.65vw; /* 70px @1920 */
`;

const BrandImg = styled.img`
  width: 13.85vw; /* 266px */
  height: 18.44vw; /* 354px */
  margin-left: 21.15vw; /* 406px */
  margin-top: 22.6vw; /* 434px */
  object-fit: cover;
`;
const AllImg = styled.img`
  width: 13.85vw; /* 266px */
  height: 30vw; /* 576px */
  margin-top: 8.75vw; /* 168px */
  object-fit: cover;
`;
const VideoDP = styled.div`
  display: flex;
  flex-direction: column;
`;
const VideoImg = styled.img`
  width: 13.85vw; /* 266px */
  height: 16.15vw; /* 310px */
  margin-top: 22.6vw; /* 434px */
  object-fit: cover;
`;
const DPImg = styled.img`
  width: 18.44vw; /* 354px */
  height: 13.85vw; /* 266px */
  margin-left: -2.29vw; /* -44px */
  object-fit: cover;
`;
const WebImg = styled.img`
  width: 16.15vw; /* 310px */
  height: 13.85vw; /* 266px */
  margin-top: 24.9vw; /* 478px */
  margin-left: -2.29vw; /* -44px */
  object-fit: cover;
`;
const LogoImg = styled.img`
  position: absolute;
  width: 22.81vw; /* 438px */
  height: 5.1vw; /* 98px */
  margin-top: 44.38vw; /* 852px */
  margin-left: 20.99vw; /* 403px */
  object-fit: cover;
`;
const Major = styled.div`
  position: absolute;
  margin-top: 16.46vw; /* 316px */
  margin-left: 21.15vw; /* 406px */
  font-family: "Pretendard";
  font-size: 1.25vw; /* 24px */
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
  color: #1e1e1e;
`;
const Opening = styled.div`
  position: absolute;
  margin-top: 16.25vw; /* 312px */
  margin-left: 66.67vw; /* 1280px */
`;
const OpeningText = styled.div`
  font-family: "Pretendard";
  font-size: 0.83vw; /* 16px */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const OpeningText2 = styled.div`
  font-family: "Pretendard";
  font-size: 0.83vw; /* 16px */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const Place = styled.div`
  position: absolute;
  margin-top: 45.31vw; /* 870px */
  margin-left: 68.28vw; /* 1311px */
  font-family: "Pretendard";
  font-size: 0.83vw; /* 16px */
  font-weight: 700;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const ScrollIcon = styled.img`
  position: absolute;
  width: 5.73vw; /* 110px */
  height: 4.79vw; /* 92px */
  margin-top: 48.75vw; /* 936px */
  margin-left: 87.66vw; /* 1683px */
`;
const OtheImage = styled.img`
  position: absolute;
  margin-top: 12.29vw; /* 236px */
  margin-left: 31.41vw; /* 603px */
  width: 36.51vw; /* 701px */
  height: 41.04vw; /* 788px */
  object-fit: cover;
`;
