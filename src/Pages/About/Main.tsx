import styled from "styled-components";
import Brand from "@/assets/Home/Brand.png";
import All from "@/assets/Home/All.png";
import Video from "@/assets/Home/Video.png";
import DP from "@/assets/Home/DP.png";
import Web from "@/assets/Home/Web.png";
import Logo from "@/assets/Home/CloseUp.png";
// import Scroll from "@/assets/Home/Scroll.png";
import Other from "@/assets/Home/Other.png";
export const Main = () => {
  return (
    <Container>
      <OtheImage src={Other} alt="other" />
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
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: calc(100vh - 6.25vw);
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;
  position: relative;
`;

const BrandImg = styled.img`
  width: 24.63vmin; /* 266px */
  height: 32.78vmin; /* 354px */
  object-fit: cover;
`;
const AllImg = styled.img`
  width: 24.63vmin; /* 266px */
  height: 53.33vmin; /* 576px */
  margin-top: -28.7vmin; /* -310px */
  object-fit: cover;
`;
const VideoDP = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20.56vmin; /* 222px */
`;
const VideoImg = styled.img`
  width: 24.63vmin; /* 266px */
  height: 28.7vmin; /* 310px */
  object-fit: cover;
`;
const DPImg = styled.img`
  width: 32.78vmin; /* 354px */
  height: 24.63vmin; /* 266px */
  margin-left: -4.07vmin; /* -44px */
  margin-top: -0.12vmin; /* -13px */
  object-fit: cover;
`;
const WebImg = styled.img`
  width: 28.7vmin; /* 310px */
  height: 24.63vmin; /* 266px */
  margin-left: -4.08vmin; /* -44px */
  object-fit: cover;
`;
const LogoImg = styled.img`
  position: absolute;
  width: 40.56vmin; /* 438px */
  height: 9.07vmin; /* 98px */
  position: absolute;
  margin-left: -62.8vmin; /* 403px */
  margin-top: 54.1vmin; /* 98px */
  object-fit: cover;
`;
const Major = styled.div`
  position: absolute;
  margin-top: -49.26vmin; /* 316px */
  margin-left: -90.8vmin; /* 406px */
  font-family: "Pretendard";
  font-size: 2.22vmin; /* 24px */
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
  color: #1e1e1e;
`;
const Opening = styled.div`
  position: absolute;
  margin-top: -48.78vmin; /* 192px */
  margin-left: 70.52vmin; /* 1280px */
`;
const OpeningText = styled.div`
  font-family: "Pretendard";
  font-size: 1.48vmin; /* 16px */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const OpeningText2 = styled.div`
  font-family: "Pretendard";
  font-size: 1.48vmin; /* 16px */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const Place = styled.div`
  position: absolute;
  margin-top: 50.5vmin; /* 870px */
  margin-left: 79.79vmin; /* 1311px */
  font-family: "Pretendard";
  font-size: 1.48vmin; /* 16px */
  font-weight: 700;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;

const OtheImage = styled.img`
  position: absolute;
  width: 64.91vmin; /* 701px */
  height: 72.96vmin; /* 788px */
  margin-top: 3.56vmin; /* 38.5px */
  margin-left: -1.2vmin; /* -13px */
  object-fit: cover;
`;
