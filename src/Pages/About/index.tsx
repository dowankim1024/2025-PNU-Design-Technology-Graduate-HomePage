import { OpeningFilm } from "./OpeningFilm";
import { Main } from "./Main";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <SnapWrapper>
      <Section>
        <Main />
      </Section>
      <Section>
        <OpeningFilm />
      </Section>
    </SnapWrapper>
  );
};

export default AboutPage;

const SnapWrapper = styled.div`
  height: calc(100vh - 6.25vw); /* 헤더 제외 영역 */
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const Section = styled.div`
  height: calc(100vh - 6.25vw); /* 각 섹션이 헤더 제외 영역을 꽉 채움 */
  scroll-snap-align: start;
  position: relative; /* 절대배치 자식들의 기준 컨테이너 */
  overflow: hidden; /* 다음 섹션으로의 시각적 넘침 방지 */
  isolation: isolate; /* 독립 스택 컨텍스트로 겹침 이슈 최소화 */
`;
