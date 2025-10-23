import styled from "styled-components";
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

  return (
    <FilmSection>
      <FilmDescription>
        <Tag>TEAM FILM</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </FilmDescription>
      <FilmImage src={getVideoImage(teamKey)} alt={`${teamKey} Video`} />
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
const FilmImage = styled.img`
  width: 33.23vw; /* 638px / 1920px * 100 = 33.23% */
  height: 20.73vw; /* 398px / 1920px * 100 = 20.73% */
  aspect-ratio: 638 / 398; /* 가로:세로 비율 고정 */
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* aspect-ratio가 높이를 계산 */
    margin-top: 12px;
    flex-shrink: 0;
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
