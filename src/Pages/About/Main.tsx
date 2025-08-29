import styled from "styled-components";
import Brand from "@/assets/Home/Brand.png";
import BrandHover from "@/assets/Home/TeamHoverImage/Brand.png";
import All from "@/assets/Home/All.png";
import Video from "@/assets/Home/Video.png";
import VideoHover from "@/assets/Home/TeamHoverImage/Video.png";
import DP from "@/assets/Home/DP.png";
import DPHover from "@/assets/Home/TeamHoverImage/DP.png";
import Web from "@/assets/Home/Web.png";
import WebHover from "@/assets/Home/TeamHoverImage/Web.png";
import Logo from "@/assets/Home/CloseUp.png";
// import Scroll from "@/assets/Home/Scroll.png";
import Other from "@/assets/Home/Other.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Main = () => {
  const [isWebTextHover, setIsWebTextHover] = useState(false);
  const [isVideoTextHover, setIsVideoTextHover] = useState(false);
  const [isDpTextHover, setIsDpTextHover] = useState(false);
  const [isBrandTextHover, setIsBrandTextHover] = useState(false);
  const navigate = useNavigate();
  const goTo = (name: string) => {
    navigate(`/team-detail?team=${name}`);
  };
  return (
    <Container>
      <OtheImage src={Other} alt="other" />
      <BrandImgWrapper onClick={() => goTo("Brand")}>
        <BrandImgBase src={Brand} alt="brand" />
        <BrandImgOverlay
          src={BrandHover}
          alt="brand hover"
          $active={isBrandTextHover}
        />
      </BrandImgWrapper>
      <AllImg src={All} alt="all"></AllImg>
      <TeamNameContainer>
        <TeamName
          onClick={() => goTo("DP")}
          onMouseEnter={() => setIsDpTextHover(true)}
          onMouseLeave={() => setIsDpTextHover(false)}
        >
          디피
        </TeamName>
        <TeamName
          onClick={() => goTo("Brand")}
          onMouseEnter={() => setIsBrandTextHover(true)}
          onMouseLeave={() => setIsBrandTextHover(false)}
        >
          브랜딩
        </TeamName>
        <TeamName
          onClick={() => goTo("Video")}
          onMouseEnter={() => setIsVideoTextHover(true)}
          onMouseLeave={() => setIsVideoTextHover(false)}
        >
          영상
        </TeamName>
        <TeamName
          onClick={() => goTo("Web")}
          onMouseEnter={() => setIsWebTextHover(true)}
          onMouseLeave={() => setIsWebTextHover(false)}
        >
          웹
        </TeamName>
      </TeamNameContainer>
      <VideoDP>
        <VideoImgWrapper onClick={() => goTo("Video")}>
          <VideoImgBase src={Video} alt="video" />
          <VideoImgOverlay
            src={VideoHover}
            alt="video hover"
            $active={isVideoTextHover}
          />
        </VideoImgWrapper>
        <DPImgWrapper onClick={() => goTo("DP")}>
          <DPImgBase src={DP} alt="dp" />
          <DPImgOverlay src={DPHover} alt="dp hover" $active={isDpTextHover} />
        </DPImgWrapper>
      </VideoDP>
      <WebImgWrapper onClick={() => goTo("Web")}>
        <WebImgBase src={Web} alt="web" />
        <WebImgOverlay
          src={WebHover}
          alt="web hover"
          $active={isWebTextHover}
        />
      </WebImgWrapper>
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
const BrandImgWrapper = styled.div`
  position: relative;
  width: 24.63vmin; /* 266px */
  height: 32.78vmin; /* 354px */
  object-fit: cover;
  cursor: pointer;
`;
const BrandImgBase = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const BrandImgOverlay = styled.img<{ $active?: boolean }>`
  position: absolute;
  top: 50%;
  left: 44%;
  transform: translate(-50%, -50%);
  width: 31.67vmin; /* 342px */
  height: 37.41vmin; /* 404px */
  object-fit: cover;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  pointer-events: none;
  z-index: 10000;
  ${BrandImgWrapper}:hover & {
    opacity: 1;
  }
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

const WebImgWrapper = styled.div`
  position: relative;
  width: 28.7vmin; /* 310px */
  height: 24.63vmin; /* 266px */
  margin-left: -4.08vmin; /* -44px */
  cursor: pointer;
  overflow: visible; /* 오버레이가 부모 영역을 넘어가도 보이도록 */
`;

const WebImgBase = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const WebImgOverlay = styled.img<{ $active?: boolean }>`
  position: absolute;
  top: 46.5%;
  left: 46.5%;
  transform: translate(-50%, -50%);
  width: 32.59vmin; /* 352px */
  height: 32.04vmin; /* 346px */
  object-fit: cover;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  pointer-events: none;
  z-index: 10000;
  ${WebImgWrapper}:hover & {
    opacity: 1;
  }
`;
const VideoImgWrapper = styled.div`
  position: relative;
  width: 24.63vmin; /* 266px */
  height: 28.7vmin; /* 310px */
  object-fit: cover;
  cursor: pointer;
`;
const VideoImgBase = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const VideoImgOverlay = styled.img<{ $active?: boolean }>`
  position: absolute;
  top: 51%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 33.52vmin; /* 362px */
  height: 33.52vmin; /* 362px */
  object-fit: cover;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  pointer-events: none;
  z-index: 10000;
  ${VideoImgWrapper}:hover & {
    opacity: 1;
  }
`;
const DPImgWrapper = styled.div`
  position: relative;
  width: 32.78vmin; /* 354px */
  height: 24.63vmin; /* 266px */
  margin-left: -4.07vmin; /* -44px */
  margin-top: -0.12vmin; /* -13px */
  object-fit: cover;
  cursor: pointer;
`;
const DPImgBase = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const DPImgOverlay = styled.img<{ $active?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32.69vmin; /* 353px */
  height: 30.74vmin; /* 332px */
  object-fit: cover;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  z-index: 10000;
  ${DPImgWrapper}:hover & {
    opacity: 1;
  }
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
  margin-top: 50.56vmin; /* 870px */
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
const TeamNameContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.37vmin; /* 4px */
  margin-top: 11.67vmin; /* 126px */
  margin-left: -45.5vmin; /* -490px */
`;
const TeamName = styled.div`
  color: #fff;
  font-family: "Pretendard";
  font-size: 1.3vmin; /* 14px */
  font-weight: 400;
  letter-spacing: 0%;
  line-height: 140%;
  font-style: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  z-index: 1000;
  cursor: pointer;
`;
