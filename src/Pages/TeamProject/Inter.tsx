import styled from "styled-components";

interface InterProps {
  title: string;
  description: string;
  levelDescription: string[];
}

export const Inter = ({ title, description, levelDescription }: InterProps) => {
  // levelDescription이 비어있거나 undefined일 때 기본값 제공
  const safeLevelDescription = levelDescription || [];

  return (
    <Container>
      <InterContainer>
        <InterImage />
        <DescriptionContainer>
          <InterDescription>
            <InteractionArt>INTERACTION ART</InteractionArt>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </InterDescription>
          <LevelSection>
            <LevelContainer>
              <LevelImage />
              <LevelDescription>
                {safeLevelDescription[0] || ""}
              </LevelDescription>
            </LevelContainer>
            <LevelContainer>
              <LevelImage />
              <LevelDescription>
                {safeLevelDescription[1] || ""}
              </LevelDescription>
            </LevelContainer>
            <LevelContainer>
              <LevelImage />
              <LevelDescription>
                {safeLevelDescription[2] || ""}
              </LevelDescription>
            </LevelContainer>
          </LevelSection>
        </DescriptionContainer>
      </InterContainer>
      <MobileInterContainer>
        <LevelContainer>
          <LevelImage />
          <LevelDescription>{safeLevelDescription[0] || ""}</LevelDescription>
        </LevelContainer>
        <LevelContainer>
          <LevelImage />
          <LevelDescription>{safeLevelDescription[1] || ""}</LevelDescription>
        </LevelContainer>
        <LevelContainer>
          <LevelImage />
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
  align-items: flex-end;
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  @media (max-width: 768px) {
    height: 100%;
    gap: 12px;
    margin-bottom: 12px;
  }
`;
const InterImage = styled.div`
  width: 20.05vw; /* 385px / 1920px * 100 = 20.05% */
  height: 28.33vw; /* 544px / 1920px * 100 = 28.33% */
  background-color: #f0f0f0;
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
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LevelImage = styled.div`
  width: 13.02vw; /* 250px / 1920px * 100 = 13.02% */
  height: 8.13vw; /* 156px / 1920px * 100 = 8.13% */
  background-color: #f0f0f0;
  margin-bottom: 0.42vw; /* 8px / 1920px * 100 = 0.42% */
  flex-shrink: 0;
  min-width: 13.02vw;
  @media (max-width: 768px) {
    width: 27.5vmin;
    height: 17.16vmin;
  }
`;
const LevelDescription = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  @media (max-width: 768px) {
    font-size: 8px;
    align-self: center;
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
