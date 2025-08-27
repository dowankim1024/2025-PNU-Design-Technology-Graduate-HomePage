import { OpeningFilm } from "./OpeningFilm"; // OpeningFilm 섹션 컴포넌트 임포트
import { Main } from "./Main"; // 메인 섹션 컴포넌트 임포트
import { Intro } from "./Intro"; // 인트로 섹션 컴포넌트 임포트
import styled from "styled-components"; // styled-components 사용을 위한 임포트
import { Footer } from "@/components/Footer"; // 푸터 컴포넌트 임포트
import { useEffect, useRef, useState } from "react"; // React 훅들 임포트
import { MadeBy } from "./MadeBy"; // MadeBy 섹션 컴포넌트 임포트
import Location from "./Location"; // Location 섹션 컴포넌트 임포트
import Professor from "./Professor";
const AboutPage = () => {
  // About 페이지 최상위 컴포넌트 정의
  const containerRef = useRef<HTMLDivElement | null>(null); // 스크롤 컨테이너 DOM 참조
  const [animating, setAnimating] = useState(false); // 부드러운 스크롤 중인지 상태
  const animatingRef = useRef(false); // setState 비동기 보완용 현재값 참조
  useEffect(() => {
    // animating 값이 바뀔 때마다 ref 동기화
    animatingRef.current = animating; // 최신 animating 값을 ref에 반영
  }, [animating]);
  const lastScrollAtRef = useRef(0); // 마지막 스크롤 처리 시각 저장
  const COOLDOWN_MS = 1000; // 스크롤 입력 쿨다운 시간(ms)

  /*
    useEffect(() => {
    // About에 진입 시 바디 스크롤 잠시 비활성화
    const prevBody = document.body.style.overflow; // 복구를 위한 기존 값 보관
    const prevHtml = document.documentElement.style.overflow; // 루트 엘리먼트 기존 값 보관
    document.body.style.overflow = "hidden"; // 바디 스크롤 비활성화
    document.documentElement.style.overflow = "hidden"; // 루트 스크롤 비활성화
    return () => {
      // 페이지 이탈 시 원복
      document.body.style.overflow = prevBody; // 바디 overflow 복구
      document.documentElement.style.overflow = prevHtml; // 루트 overflow 복구
    };
  }, []); // 마운트/언마운트 시 한 번만 실행
  */

  useEffect(() => {
    // 커스텀 휠 스냅 스크롤 로직
    const el = containerRef.current; // 스크롤 컨테이너 DOM
    if (!el) return; // DOM이 아직 없으면 종료
    const onWheel = (e: WheelEvent) => {
      // 휠 이벤트 핸들러(캡처)
      e.preventDefault(); // 기본 스크롤 동작 차단
      const now = Date.now(); // 현재 시각(ms)
      if (animatingRef.current || now - lastScrollAtRef.current < COOLDOWN_MS)
        return; // 애니메이션 중이거나 쿨다운 중이면 무시
      const sectionHeight = el.clientHeight; // 헤더 제외 영역의 높이(섹션 높이 가정)
      const current = el.scrollTop; // 현재 스크롤 위치
      const direction = e.deltaY > 0 ? 1 : -1; // 아래(+1)/위(-1) 판별
      const currentIndex = Math.round(current / sectionHeight); // 현재 섹션 인덱스 추정
      const maxIndex = Math.ceil(el.scrollHeight / sectionHeight) - 1; // 마지막 섹션 인덱스
      const targetIndex = Math.min(
        Math.max(currentIndex + direction, 0), // 0 미만 방지
        maxIndex // 마지막 초과 방지
      ); // 이동 대상 섹션 인덱스
      const target = targetIndex * sectionHeight; // 대상 섹션의 스크롤 상단 좌표
      setAnimating(true); // 애니메이션 시작 표시
      animatingRef.current = true; // ref에도 반영
      lastScrollAtRef.current = now; // 마지막 처리 시각 갱신
      el.scrollTo({ top: target, behavior: "smooth" }); // 부드럽게 스크롤 이동
      window.setTimeout(() => {
        // 쿨다운이 끝나면 입력 재허용
        setAnimating(false); // 상태 종료
        animatingRef.current = false; // ref 종료
      }, COOLDOWN_MS);
    };
    el.addEventListener("wheel", onWheel, { passive: false }); // passive:false로 등록
    return () => {
      el.removeEventListener("wheel", onWheel as EventListener); // 클린업
    };
  }, [COOLDOWN_MS]); // 쿨다운 시간이 바뀌면 로직 재등록
  return (
    // JSX 렌더링 영역
    <SnapWrapper ref={containerRef}>
      {" "}
      {/* 스크롤 컨테이너(헤더 제외 높이 영역) */}
      <Section>
        {" "}
        {/* 섹션 1: 메인 */}
        <Main /> {/* 메인 비주얼 컴포넌트 */}
      </Section>
      <Section>
        {" "}
        {/* 섹션 2: 오프닝 필름 */}
        <OpeningFilm /> {/* 비디오 섹션 */}
      </Section>
      <Section>
        {" "}
        {/* 섹션 3: 오프닝 필름(샘플) */}
        <Intro /> {/* 동일 섹션 반복 배치 */}
      </Section>
      <Section>
        {" "}
        {/* 섹션 4: 오프닝 필름(샘플) */}
        <MadeBy /> {/* 동일 섹션 반복 배치 */}
      </Section>
      <Section>
        {" "}
        {/* 섹션 5: 오프닝 필름(샘플) */}
        <Location /> {/* 동일 섹션 반복 배치 */}
      </Section>
      <Section>
        {" "}
        {/* 섹션 6: 교수님 */}
        <Professor /> {/* 동일 섹션 반복 배치 */}
      </Section>
      <FooterSection>
        {" "}
        {/* 마지막: 푸터 영역(고정 높이) */}
        <Footer /> {/* 전역 푸터 컴포넌트 */}
      </FooterSection>
    </SnapWrapper>
  ); // 컴포넌트 종료
};

export default AboutPage; // 기본 내보내기

const SnapWrapper = styled.div`
  /* 스크롤 컨테이너 스타일 정의 */
  height: calc(100vh - 6.25vw); /* 헤더 높이(6.25vw)를 제외한 가시 영역 높이 */
  overflow-y: auto; /* 세로 스크롤 허용 */
  overflow-x: hidden; /* 가로 스크롤 숨김 */
  scroll-snap-type: y proximity; /* 근접 시 섹션 스냅 */
  scroll-behavior: smooth; /* 코드로 스크롤 시 부드럽게 */
  overscroll-behavior: contain; /* 상하 경계에서 바운스/버블 방지 */
`;

const Section = styled.div`
  /* 기본 섹션 스타일 정의 */
  height: calc(100vh - 6.25vw); /* 헤더 제외 높이를 가득 채움 */
  scroll-snap-align: start; /* 섹션 시작 지점에서 스냅 */
  position: relative; /* 절대배치 자식의 기준 박스 */
  overflow: hidden; /* 섹션 밖으로 넘치는 요소 클리핑 */
  isolation: isolate; /* 레이어 격리로 z-index 간섭 최소화 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* 마지막 푸터 구간은 전 화면을 차지하지 않고 끝선에 붙도록 처리 */
const FooterSection = styled.div`
  /* 마지막 푸터 섹션 스타일 */
  height: 20.83vw; /* 푸터 고정 높이(1920 기준 400px) */
  scroll-snap-align: end; /* 컨테이너 하단에 스냅 */
  position: relative; /* 내부 절대배치 기준 */
  overflow: hidden; /* 넘침 숨김 */
  isolation: isolate; /* 레이어 격리 */
`;
