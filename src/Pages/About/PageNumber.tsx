import styled from "styled-components";
import { useEffect, useState } from "react";

interface PageNumberProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const PageNumber = ({ containerRef }: PageNumberProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const currentIndex = Math.round(scrollTop / sectionHeight) + 1;
      setCurrentPage(Math.min(Math.max(currentIndex, 1), totalPages));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <Container>
      {Array.from({ length: totalPages }, (_, index) => (
        <NumberWrapper key={index + 1}>
          <Number $isActive={currentPage === index + 1}>{index + 1}</Number>
          {currentPage === index + 1 && <Underline />}
        </NumberWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 9.9vw; /* 1920 기준 1730px 위치 */
  top: 46.4vh; /* 1080 기준 512px 위치 */
  display: flex;
  flex-direction: column;
  gap: 2.04vmin; /* 22px */
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NumberWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.04vmin; /* 22px */
`;

const Number = styled.div<{ $isActive: boolean }>`
  font-family: "Pretendard";
  font-size: 1.48vmin; /* 16px */
  font-weight: 700;
  letter-spacing: -0.05em;
  color: #080404;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
  transition: opacity 0.3s ease;
  writing-mode: vertical-rl;
`;

const Underline = styled.div`
  width: 0.19vmin; /* 2px */
  height: 3.15vmin; /* 34px */
  background-color: #080404;
`;
