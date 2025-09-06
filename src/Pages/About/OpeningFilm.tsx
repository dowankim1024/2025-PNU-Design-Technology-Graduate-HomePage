import styled from "styled-components";
import { Reveal } from "@/components/common/Reveal";

export const OpeningFilm = () => {
  return (
    <Container>
      <Title>OPENING FILM</Title>

      <VideoContainer>
        <Reveal delayMs={300}>
          <Video />
        </Reveal>
        <Reveal delayMs={300}>
          <VideoInfo>
            Dept. if Design, Design and Technology <br />
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
`;
const VideoContainer = styled.div`
  width: 103.19vmin; /* 1114.55px */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;
const Video = styled.div`
  background-color: #dcdcdc;
  width: 103.19vmin; /* 1114.55px */
  height: 54.44vmin; /* 588px */
  margin-top: 5.56vmin; /* 60px */
`;
const VideoInfo = styled.div`
  font-family: "Pretendard";
  font-size: 1.85vmin; /* 20px */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-top: 1.48vmin; /* 16px */
`;
