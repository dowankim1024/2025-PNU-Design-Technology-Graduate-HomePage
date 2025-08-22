import styled from "styled-components";
import Brand from "@/assets/Home/brand.png";
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
  margin-top: -120px;
  margin-bottom: 70px;
`;

const BrandImg = styled.img`
  width: 266px;
  height: 354px;
  margin-left: 406px;
  margin-top: 434px;
  object-fit: cover;
`;
const AllImg = styled.img`
  width: 266px;
  height: 576px;
  margin-top: 168px;
  object-fit: cover;
`;
const VideoDP = styled.div`
  display: flex;
  flex-direction: column;
`;
const VideoImg = styled.img`
  width: 266px;
  height: 310px;
  margin-top: 434px;
  object-fit: cover;
`;
const DPImg = styled.img`
  width: 354px;
  height: 266px;
  margin-left: -44px;
  object-fit: cover;
`;
const WebImg = styled.img`
  width: 310px;
  height: 266px;
  margin-top: 478px;
  margin-left: -44px;
  object-fit: cover;
`;
const LogoImg = styled.img`
  position: absolute;
  width: 438px;
  height: 98px;
  margin-top: 852px;
  margin-left: 403px;
  object-fit: cover;
`;
const Major = styled.div`
  position: absolute;
  margin-top: 316px;
  margin-left: 406px;
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
  color: #1e1e1e;
`;
const Opening = styled.div`
  position: absolute;
  margin-top: 312px;
  margin-left: 1280px;
`;
const OpeningText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const OpeningText2 = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const Place = styled.div`
  position: absolute;
  margin-top: 870px;
  margin-left: 1311px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0%;
  text-align: right;
  color: #080404;
`;
const ScrollIcon = styled.img`
  position: absolute;
  width: 110px;
  height: 92px;
  margin-top: 936px;
  margin-left: 1683px;
`;
const OtheImage = styled.img`
  position: absolute;
  margin-top: 236px;
  margin-left: 603px;
  width: 701px;
  height: 788px;
  object-fit: cover;
`;
