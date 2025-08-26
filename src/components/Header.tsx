import styled from "styled-components";
import logo from "@/assets/Logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAbout = pathname === "/about";
  const isDesigners =
    pathname.startsWith("/designers") || pathname.startsWith("/designer");
  const isTeam = pathname.startsWith("/team");
  const isVisitors = pathname.startsWith("/visitor");
  const headerRef = useRef<HTMLDivElement | null>(null);

  // 헤더 영역 위에서의 스크롤(휠/터치)을 차단하여 페이지 스크롤이 움직이지 않도록 처리
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel as EventListener);
      el.removeEventListener("touchmove", onTouchMove as EventListener);
    };
  }, []);
  return (
    <HeaderContainer ref={headerRef}>
      <Logo src={logo} alt="logo" onClick={() => navigate("/about")} />
      <ContentWrapper>
        <HeaderItem
          label="ABOUT"
          active={isAbout}
          onClick={() => navigate("/about")}
        />
        <HeaderItem
          label="DESIGNERS"
          active={isDesigners}
          onClick={() => navigate("/designers")}
        />
        <HeaderItem
          label="TEAM PROJECT"
          active={isTeam}
          onClick={() => navigate("/team")}
        />
        <HeaderItem
          label={"VISITOR'S BOOK"}
          active={isVisitors}
          onClick={() => navigate("/visitor")}
        />
      </ContentWrapper>
      <MobileMenu>
        <span></span>
        <span></span>
        <span></span>
      </MobileMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25vw; /* 120px / 1920px * 100 = 6.25% */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  z-index: 1000;
  border-bottom: 1px solid #c5c5c5;
  box-sizing: border-box;
  overscroll-behavior: contain; /* 헤더 위에서의 스크롤 체인 방지 */
  touch-action: none; /* 모바일에서 기본 스크롤 제스처 비활성화 */

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }
`;
const Logo = styled.img`
  width: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
  height: 3.33vw; /* 64px / 1920px * 100 = 3.33% */
  margin-left: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 25px;
    margin-left: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
  margin-right: 5.2vw; /* 100px / 1920px * 100 = 5.2% */

  @media (max-width: 768px) {
    gap: 20px;
    margin-right: 0;
    display: none; /* 모바일에서는 메뉴 숨김 */
  }
`;

const NavItem = styled.div<{ $active?: boolean }>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: opacity 200ms ease;
`;

const WidthGhost = styled.span`
  visibility: hidden;
  font-family: Pretendard;
  font-size: 1.04vw;
  line-height: 100%;
  letter-spacing: 0;
  font-style: Regular;
  font-weight: 700; /* 볼드 폭 기준으로 폭 고정 */
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Layer = styled.span<{ $bold?: boolean; $active?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  font-family: Pretendard;
  font-size: 1.04vw;
  line-height: 100%;
  letter-spacing: 0;
  font-style: Regular;
  color: #080404;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  opacity: ${({ $bold, $active }) =>
    $active ? ($bold ? 1 : 0) : $bold ? 0 : 1};
  transition: opacity 200ms ease;
  pointer-events: none;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function HeaderItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <NavItem $active={active} onClick={onClick}>
      <WidthGhost>{label}</WidthGhost>
      <Layer $active={active}>{label}</Layer>
      <Layer $bold $active={active}>
        {label}
      </Layer>
    </NavItem>
  );
}

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;

    span {
      width: 20px;
      height: 2px;
      background-color: #080404;
    }
  }
`;
