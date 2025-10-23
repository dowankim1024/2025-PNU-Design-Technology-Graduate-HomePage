import styled from "styled-components";
import BrandImage from "../../assets/Inter_Team/Brand.png";
import DPImage from "../../assets/Inter_Team/DP.png";
import VideoImage from "../../assets/Inter_Team/Video.png";
import WebImage from "../../assets/Inter_Team/Web.png";

// Level Images
import BrandLevel1 from "../../assets/levelImage_team/brand_1.png";
import BrandLevel2 from "../../assets/levelImage_team/brand_2.png";
import BrandLevel3 from "../../assets/levelImage_team/brand_3.png";
import DPLevel1 from "../../assets/levelImage_team/dp_1.png";
import DPLevel2 from "../../assets/levelImage_team/dp_2.png";
import DPLevel3 from "../../assets/levelImage_team/dp_3.png";
import VideoLevel1 from "../../assets/levelImage_team/video_1.png";
import VideoLevel2 from "../../assets/levelImage_team/video_2.png";
import VideoLevel3 from "../../assets/levelImage_team/video_3.png";
import WebLevel1 from "../../assets/levelImage_team/web_1.png";
import WebLevel2 from "../../assets/levelImage_team/web_2.png";
import WebLevel3 from "../../assets/levelImage_team/web_3.png";

interface InterProps {
  title: string;
  description: string;
  levelDescription: string[];
  teamKey: string;
}

export const Inter = ({
  title,
  description,
  levelDescription,
  teamKey,
}: InterProps) => {
  // levelDescription이 비어있거나 undefined일 때 기본값 제공
  const safeLevelDescription = levelDescription || [];

  // teamKey에 따라 해당하는 이미지 선택
  const getTeamImage = (teamKey: string) => {
    switch (teamKey.toLowerCase()) {
      case "web":
        return WebImage;
      case "brand":
        return BrandImage;
      case "dp":
        return DPImage;
      case "video":
        return VideoImage;
      default:
        return WebImage; // 기본값
    }
  };

  // teamKey와 level에 따라 레벨 이미지 선택
  const getLevelImage = (teamKey: string, level: number) => {
    switch (teamKey.toLowerCase()) {
      case "web":
        switch (level) {
          case 1:
            return WebLevel1;
          case 2:
            return WebLevel2;
          case 3:
            return WebLevel3;
          default:
            return WebLevel1;
        }
      case "brand":
        switch (level) {
          case 1:
            return BrandLevel1;
          case 2:
            return BrandLevel2;
          case 3:
            return BrandLevel3;
          default:
            return BrandLevel1;
        }
      case "dp":
        switch (level) {
          case 1:
            return DPLevel1;
          case 2:
            return DPLevel2;
          case 3:
            return DPLevel3;
          default:
            return DPLevel1;
        }
      case "video":
        switch (level) {
          case 1:
            return VideoLevel1;
          case 2:
            return VideoLevel2;
          case 3:
            return VideoLevel3;
          default:
            return VideoLevel1;
        }
      default:
        return WebLevel1; // 기본값
    }
  };

  return (
    <Container>
      <InterContainer>
        <InterImage src={getTeamImage(teamKey)} alt={teamKey} />
        <DescriptionContainer>
          <InterDescription>
            <InteractionArt>INTERACTION ART</InteractionArt>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </InterDescription>
          <LevelSection>
            <LevelContainer>
              <LevelImage
                src={getLevelImage(teamKey, 1)}
                alt={`${teamKey} Level 1`}
              />
              <LevelDescription>
                {safeLevelDescription[0] || ""}
              </LevelDescription>
            </LevelContainer>
            <LevelContainer>
              <LevelImage
                src={getLevelImage(teamKey, 2)}
                alt={`${teamKey} Level 2`}
              />
              <LevelDescription>
                {safeLevelDescription[1] || ""}
              </LevelDescription>
            </LevelContainer>
            <LevelContainer>
              <LevelImage
                src={getLevelImage(teamKey, 3)}
                alt={`${teamKey} Level 3`}
              />
              <LevelDescription>
                {safeLevelDescription[2] || ""}
              </LevelDescription>
            </LevelContainer>
          </LevelSection>
        </DescriptionContainer>
      </InterContainer>
      <MobileInterContainer>
        <LevelContainer>
          <LevelImage
            src={getLevelImage(teamKey, 1)}
            alt={`${teamKey} Level 1`}
          />
          <LevelDescription>{safeLevelDescription[0] || ""}</LevelDescription>
        </LevelContainer>
        <LevelContainer>
          <LevelImage
            src={getLevelImage(teamKey, 2)}
            alt={`${teamKey} Level 2`}
          />
          <LevelDescription>{safeLevelDescription[1] || ""}</LevelDescription>
        </LevelContainer>
        <LevelContainer>
          <LevelImage
            src={getLevelImage(teamKey, 3)}
            alt={`${teamKey} Level 3`}
          />
          <LevelDescription>{safeLevelDescription[2] || ""}</LevelDescription>
        </LevelContainer>
      </MobileInterContainer>
    </Container>
  );
};
const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
const InterContainer = styled.div`
  width: 100%;
  height: 28.33vw; /* 544px / 1920px * 100 = 28.33% */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  @media (max-width: 768px) {
    height: 100%;
    gap: 12px;
    margin-bottom: 12px;
    align-items: flex-end;
  }
`;
const InterImage = styled.img`
  width: 20.05vw; /* 385px / 1920px * 100 = 20.05% */
  height: 28.33vw; /* 544px / 1920px * 100 = 28.33% */
  object-fit: cover;
  flex-shrink: 0;
  min-width: 20.05vw;
  @media (max-width: 768px) {
    width: 180px;
    height: 280px;
    flex-shrink: 0;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9.2vw;
  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;
const InterDescription = styled.div`
  width: 40.78vw; /* 783px / 1920px * 100 = 40.78% */
  height: 8.02vw; /* 154px / 1920px * 100 = 8.02% */
  margin-bottom: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
  }
`;
const InteractionArt = styled.div`
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
    font-size: 12px;
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
const LevelSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LevelImage = styled.img`
  width: 13.02vw; /* 250px / 1920px * 100 = 13.02% */
  height: 8.13vw; /* 156px / 1920px * 100 = 8.13% */
  object-fit: cover;
  margin-bottom: 0.42vw; /* 8px / 1920px * 100 = 0.42% */
  flex-shrink: 0;
  min-width: 13.02vw;
  @media (max-width: 768px) {
    width: 27.5vmin;
    height: 17.16vmin;
  }
`;
const LevelDescription = styled.div`
  width: 13.02vw;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  @media (max-width: 768px) {
    font-size: 8px;
    align-self: center;
    width: 27.5vmin;
  }
`;
const MobileInterContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
