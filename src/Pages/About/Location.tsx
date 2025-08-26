import styled from "styled-components";
import { useEffect, useRef } from "react";

const Location = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const center = { lat: 35.174061194349754, lng: 129.12944265463105 };

    const initMap = () => {
      if (!mapRef.current || !window.google?.maps) return;
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: "greedy", // 휠/터치 제스처를 지도 확대/축소가 우선하도록
      });
      new google.maps.Marker({
        map,
        position: center,
        title: "부산디자인진흥원",
      });
    };

    // 이미 로드된 경우
    if (window.google?.maps) {
      initMap();
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
      | string
      | undefined;
    const scriptId = "google-maps-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey ?? ""}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      // 이미 추가된 스크립트라면 onload 보장 후 초기화
      const script = document.getElementById(scriptId) as HTMLScriptElement;
      if (window.google?.maps) initMap();
      else script.addEventListener("load", initMap, { once: true });
    }
  }, []);

  // 지도 영역 위에서 페이지 스크롤이 발생하지 않도록 추가 보강
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const block = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    el.addEventListener("wheel", block, { passive: false });
    el.addEventListener("touchmove", block, { passive: false });
    // iOS 사파리 핀치 제스처 대응
    el.addEventListener("gesturestart", block, { passive: false });
    return () => {
      el.removeEventListener("wheel", block as EventListener);
      el.removeEventListener("touchmove", block as EventListener);
      el.removeEventListener("gesturestart", block);
    };
  }, []);
  return (
    <Container>
      <Title>OFFLINE LOCATION</Title>
      <ContentsContainer>
        <DescriptionContainer>
          <MainLocation>부산디자인진흥원</MainLocation>
          <SubLocation>
            부산광역시 해운대구 센텀동로 57 부산디자인진흥원 1층
          </SubLocation>
          <Line />
          <MainLocation>DESIGN CENTER BUSAN 1F Exhibition Hall</MainLocation>
          <SubLocation>57, Centum dong-ro, Haeundae-gu, Busan</SubLocation>
          <Line />
          <MainLocation>2025/11/14 - 2025/11/17</MainLocation>
          <FinalLine />
        </DescriptionContainer>
        <Map ref={mapRef} />
      </ContentsContainer>
    </Container>
  );
};

export default Location;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1114px;
`;
const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-bottom: 60px;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MainLocation = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
`;
const SubLocation = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
`;
const Map = styled.div`
  width: 640px;
  height: 400px;
  background-color: #080404;
  overscroll-behavior: contain; /* 스크롤 체인 방지 */
  touch-action: none; /* 터치 스크롤 제스처 비활성화(지도 제스처 우선) */
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #080404;
  margin: 12px 0;
`;
const FinalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #080404;
  margin-top: 12px;
`;
