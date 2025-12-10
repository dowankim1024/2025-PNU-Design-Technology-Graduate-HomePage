import styled from "styled-components";
import { Reveal } from "@/components/common/Reveal";

const YOUTUBE_VIDEO_ID = "P1VHgwSs_1s";

export const OpeningFilm = () => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&controls=1&rel=0`;

  return (
    <Container>
      <Title>OPENING FILM</Title>

      <VideoContainer>
        <Reveal delayMs={300}>
          <VideoWrapper>
            <YoutubeIframe
              src={youtubeEmbedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Opening Film"
            />
          </VideoWrapper>
        </Reveal>
        <Reveal delayMs={300}>
          <VideoInfo>
            Dept. of Design, Design and Technology <br />
            16th Graduation Exhibition
          </VideoInfo>
        </Reveal>
      </VideoContainer>
    </Container>
  );
};
const Container = styled.div`
  /* 헤더(120px ≒ 11.11vmin) 제외한 영역 높이 */
  height: calc(100vmin - 11.11vmin);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Pretendard";
  font-size: 4.44vmin; /* 48px */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-top: 8.06vmin; /* 87px */
  @media (max-width: 768px) {
    margin-top: -5vmin;
  }
`;
const VideoContainer = styled.div`
  width: 103.19vmin; /* 1114.55px */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 8vmin;
  }
`;
const VideoWrapper = styled.div`
  width: 103.19vmin; /* 1114.55px */
  height: 54.44vmin; /* 588px */
  margin-top: 5.56vmin; /* 60px */
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 80vmin;
    height: 42.16vmin;
  }
`;

const YoutubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`;
const VideoInfo = styled.div`
  font-family: "Pretendard";
  font-size: 1.85vmin; /* 20px */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-top: 1.48vmin; /* 16px */
  @media (max-width: 768px) {
    font-size: 8px;
    margin-top: 4vmin;
  }
`;
