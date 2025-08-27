import styled from "styled-components";
import Left from "@/assets/Icons/Left.png";
import Right from "@/assets/Icons/Right.png";
import { useNavigate } from "react-router-dom";

interface ListSelectBoxProps {
  list: string[];
  currentName: string;
  onNavigate?: (name: string) => void;
}

export const ListSelectBox = ({
  list,
  currentName,
  onNavigate,
}: ListSelectBoxProps) => {
  const navigate = useNavigate();
  const total = list?.length ?? 0;
  const currentIndex = total > 0 ? list.indexOf(currentName) : -1;
  const prevIndex = currentIndex >= 0 ? (currentIndex - 1 + total) % total : -1;
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % total : -1;
  const prevName = prevIndex >= 0 ? list[prevIndex] : undefined;
  const nextName = nextIndex >= 0 ? list[nextIndex] : undefined;

  const goTo = (name?: string) => {
    if (!name) return;
    if (onNavigate) return onNavigate(name);
    const params = new URLSearchParams({ name });
    navigate(`/designer?${params.toString()}`);
  };
  return (
    <ListSelectBoxContainer>
      <ListSelectBoxBorder>
        <ListSelectBoxContent>
          <Button onClick={() => goTo(prevName)}>
            <Icon src={Left} />
            <Name>{prevName ?? ""}</Name>
          </Button>
          <ListName>목록</ListName>
          <Button onClick={() => goTo(nextName)}>
            <Name>{nextName ?? ""}</Name>
            <Icon src={Right} />
          </Button>
        </ListSelectBoxContent>
      </ListSelectBoxBorder>
    </ListSelectBoxContainer>
  );
};
const ListSelectBoxContainer = styled.div`
  width: 100%;
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  @media (max-width: 768px) {
    padding: 0 24px;
    margin-bottom: 30px;
  }
`;
const ListSelectBoxBorder = styled.div`
  width: 100%;
  height: 3.85vw; /* 74px / 1920px * 100 = 3.85% */
  position: relative;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #080404 0,
      #080404 8px,
      transparent 8px,
      transparent 16px
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #080404 0,
      #080404 8px,
      transparent 8px,
      transparent 16px
    );
  }
  @media (max-width: 768px) {
    height: 24px;
  }
`;
const ListSelectBoxContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;
const ListName = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
const Button = styled.div`
  cursor: pointer;
  gap: 1.67vw; /* 16px / 1920px * 100 = 1.67% */
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    gap: 6px;
  }
`;
const Name = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
const Icon = styled.img`
  width: 0.47vw; /* 9px / 1920px * 100 = 0.47% */
  height: 0.94vw; /* 18px / 1920px * 100 = 0.94% */
  @media (max-width: 768px) {
    width: 4.5px;
    height: 9px;
  }
`;
