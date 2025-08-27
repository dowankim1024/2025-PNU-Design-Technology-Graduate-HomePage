import styled from "styled-components";
import logo from "@/assets/Logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAbout = pathname === "/about";
  const isDesigners =
    pathname.startsWith("/designers") || pathname.startsWith("/designer");
  const isTeam = pathname.startsWith("/team");
  const isVisitors = pathname.startsWith("/visitor");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

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
  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <HeaderContainer ref={headerRef}>
        <Logo src={logo} alt="logo" onClick={() => go("/about")} />
        <ContentWrapper>
          <HeaderItem
            label="ABOUT"
            active={isAbout}
            onClick={() => go("/about")}
          />
          <HeaderItem
            label="DESIGNERS"
            active={isDesigners}
            onClick={() => go("/designers")}
          />
          <HeaderItem
            label="TEAM PROJECT"
            active={isTeam}
            onClick={() => go("/team")}
          />
          <HeaderItem
            label={"VISITOR'S BOOK"}
            active={isVisitors}
            onClick={() => go("/visitor")}
          />
        </ContentWrapper>
        <MobileMenu onClick={() => setOpen(prev => !prev)} aria-expanded={open}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenu>
      </HeaderContainer>
      <MobileNav $open={open}>
        <MobileNavItem onClick={() => go("/about")} $active={isAbout}>
          ABOUT
        </MobileNavItem>
        <MobileNavItem onClick={() => go("/designers")} $active={isDesigners}>
          DESIGNERS
        </MobileNavItem>
        <MobileNavItem onClick={() => go("/team")} $active={isTeam}>
          TEAM PROJECT
        </MobileNavItem>
        <MobileNavItem onClick={() => go("/visitor")} $active={isVisitors}>
          VISITOR'S BOOK
        </MobileNavItem>
      </MobileNav>
    </>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 11.11vmin; /* 120px */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  z-index: 1000;
  border-bottom: 1px solid #c5c5c5;
  box-sizing: border-box;
  overscroll-behavior: contain; /* 헤더 위에서의 스크롤 체인 방지 */
  touch-action: none; /* 모바일에서 기본 스크롤 제스처 비활성화 */
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    height: 60px; /* 60px */
    padding: 0 1.85vmin; /* 0 20px */
  }
`;
const Logo = styled.img`
  width: 9.24vmin; /* 100px */
  height: 5.91vmin; /* 64px */
  margin-left: 9.24vmin; /* 100px */
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50px; /* 40px */
    height: 32px; /* 25px */
    margin-left: 12px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9.24vmin; /* 100px */
  margin-right: 9.24vmin; /* 100px */

  @media (max-width: 768px) {
    gap: 1.85vmin; /* 20px */
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
  font-size: 1.85vmin; /* 20px */
  line-height: 100%;
  letter-spacing: 0;
  font-style: Regular;
  font-weight: 700; /* 볼드 폭 기준으로 폭 고정 */
  @media (max-width: 768px) {
    font-size: 1.3vmin; /* 14px */
  }
`;

const Layer = styled.span<{ $bold?: boolean; $active?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  font-family: Pretendard;
  font-size: 1.85vmin; /* 20px */
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
    font-size: 1.3vmin; /* 14px */
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
    gap: 4px; /* 4px */
    cursor: pointer;
    margin-right: 12px;
    span {
      width: 20px; /* 20px */
      height: 2px; /* 2px */
      background-color: #080404;
    }
  }
`;

const MobileNav = styled.nav<{ $open: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: fixed; /* 레이아웃에 영향 없이 오버레이로 표시 */
    top: 60px; /* 헤더 높이 만큼 아래 */
    left: 0;
    right: 0;
    z-index: 2000; /* 헤더보다 위 */
    flex-direction: column;
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid #c5c5c5;
    border-top: 1px solid #c5c5c5;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); /* 살짝 떠 보이게 */
  }
`;

const MobileNavItem = styled.button<{ $active?: boolean }>`
  all: unset;
  padding: 12px 20px; /* 24px 40px */
  font-family: Pretendard;
  font-size: 12px; /* 20px */
  line-height: 1;
  color: #080404;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  background: transparent;
  cursor: pointer;
  &:active {
    opacity: 1;
  }
`;
