import styled from "styled-components";
import { Team_Film_Link } from "./constants";
import BrandVideoImage from "../../assets/Video_team/Brand.png";
import DPVideoImage from "../../assets/Video_team/DP.png";
import VideoVideoImage from "../../assets/Video_team/Video.png";
import WebVideoImage from "../../assets/Video_team/Web.png";

interface FilmProps {
  title: string;
  description: string;
  teamKey: string;
}

export const Film = ({ title, description, teamKey }: FilmProps) => {
  // teamKey에 따라 해당하는 비디오 이미지 선택
  const getVideoImage = (teamKey: string) => {
    switch (teamKey.toLowerCase()) {
      case "web":
        return WebVideoImage;
      case "brand":
        return BrandVideoImage;
      case "dp":
        return DPVideoImage;
      case "video":
        return VideoVideoImage;
      default:
        return WebVideoImage; // 기본값
    }
  };

  const normalizedTeamKey = teamKey.toLowerCase();
  const filmLink =
    Team_Film_Link[normalizedTeamKey as keyof typeof Team_Film_Link] ??
    Team_Film_Link.web;

  return (
    <FilmSection>
      <FilmDescription>
        <Tag>TEAM FILM</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </FilmDescription>
      <FilmMediaWrapper
        href={filmLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} 팀 영상 보러가기`}
      >
        <FilmImage src={getVideoImage(teamKey)} alt={`${teamKey} Video`} />
        <FilmOverlay>
          <OverlayContent>
            <LinkIcon
              width="48"
              height="48"
              viewBox="0 0 48 48"
              role="presentation"
              aria-hidden="true"
            >
              <path
                d="M27.78 13.22a4.5 4.5 0 016.36 0l.64.64a4.5 4.5 0 010 6.36l-5.66 5.66"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.88 34.78a4.5 4.5 0 01-6.36 0l-.64-.64a4.5 4.5 0 010-6.36l5.66-5.66"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 27L21 23"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </LinkIcon>
            <OverlayText>영상 보러가기</OverlayText>
          </OverlayContent>
        </FilmOverlay>
      </FilmMediaWrapper>
    </FilmSection>
  );
};
const FilmSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
`;
const FilmMediaWrapper = styled.a`
  position: relative;
  display: block;
  width: 33.23vw; /* 638px / 1920px * 100 = 33.23% */
  height: 20.73vw; /* 398px / 1920px * 100 = 20.73% */
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
  }
  &:focus-visible {
    outline: 2px solid rgba(8, 4, 4, 0.4);
    outline-offset: 4px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 12px;
  }
`;
const FilmImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 638 / 398; /* 가로:세로 비율 고정 */
  object-fit: cover;
  display: block;
  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* aspect-ratio가 높이를 계산 */
    margin-top: 12px;
    flex-shrink: 0;
  }
`;
const FilmOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 4, 4, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #ffffff;
  ${FilmMediaWrapper}:hover &,
  ${FilmMediaWrapper}:focus-visible & {
    opacity: 1;
  }
`;
const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transform: translateY(8px);
  transition: transform 0.3s ease;
  ${FilmMediaWrapper}:hover &,
  ${FilmMediaWrapper}:focus-visible & {
    transform: translateY(0);
  }
`;
const LinkIcon = styled.svg`
  color: #ffffff;
  transition: transform 0.3s ease;
  ${FilmMediaWrapper}:hover &,
  ${FilmMediaWrapper}:focus-visible & {
    transform: scale(1.05);
  }
`;
const OverlayText = styled.span`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 0.83vw;
  line-height: 140%;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const FilmDescription = styled.div`
  width: 27.6vw; /* 530px / 1920px * 100 = 27.60% */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Tag = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.15vw; /* 22px / 1920px * 100 = 1.15% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Title = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 145%;
  letter-spacing: 0;
  color: #080404;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
