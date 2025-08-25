import styled from "styled-components";

export const OpeningFilm = () => {
  return (
    <Container>
      <Title>OPENING FILM</Title>
      <VideoContainer>
        <Video />
        <VideoInfo>
          Dept. if Design, Design and Technology <br />
          16th Graduation Exhibition
        </VideoInfo>
      </VideoContainer>
    </Container>
  );
};
const Container = styled.div`
  /* 16:9 기준 100vh ≒ 56.25vw → 콘텐츠는 헤더(6.25vw) 제외로 50vw */
  height: calc(100vh - 6.25vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Pretendard";
  font-size: 2.5vw; /* 48px @1920 */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-top: 8.06vh; /* 87px @1080 */
`;
const VideoContainer = styled.div`
  width: 58.05vw; /* 1114.55px @1920 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;
const Video = styled.div`
  background-color: #dcdcdc;
  width: 58.05vw; /* 1114.55px @1920 */
  height: 54.44vh; /* 588px @1080 */
  margin-top: 3.13vw; /* 60px @1920 */
`;
const VideoInfo = styled.div`
  font-family: "Pretendard";
  font-size: 1.04vw; /* 20px @1920 */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-top: 1.48vh; /* 16px @1080 */
`;
