import styled from "styled-components";

interface InterProps {
  title: string;
  description: string;
  levelDescription: string[];
  levelImages: string[];
  interImage: string;
}

export const Inter = ({
  title,
  description,
  levelDescription,
  levelImages,
  interImage,
}: InterProps) => {
  return (
    <Container>
      <InterContainer>
        <InterImage src={interImage} alt="Interaction Art" />
        <DescriptionContainer>
          <InterDescription>
            <InteractionArt>INTERACTION ART</InteractionArt>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </InterDescription>
          <LevelSection>
            <LevelContainer>
              <LevelImage src={levelImages[0]} alt="Level 1" />
              <LevelDescription>{levelDescription[0]}</LevelDescription>
            </LevelContainer>
            <LevelContainer>
              <LevelImage src={levelImages[1]} alt="Level 2" />
              <LevelDescription>{levelDescription[1]}</LevelDescription>
            </LevelContainer>
            <LevelContainer>
              <LevelImage src={levelImages[2]} alt="Level 3" />
              <LevelDescription>{levelDescription[2]}</LevelDescription>
            </LevelContainer>
          </LevelSection>
        </DescriptionContainer>
      </InterContainer>
      <MobileInterContainer>
        <LevelContainer>
          <LevelImage src={levelImages[0]} alt="Level 1" />
          <LevelDescription>{levelDescription[0]}</LevelDescription>
        </LevelContainer>
        <LevelContainer>
          <LevelImage src={levelImages[1]} alt="Level 2" />
          <LevelDescription>{levelDescription[1]}</LevelDescription>
        </LevelContainer>
        <LevelContainer>
          <LevelImage src={levelImages[2]} alt="Level 3" />
          <LevelDescription>{levelDescription[2]}</LevelDescription>
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
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  @media (max-width: 768px) {
    padding: 0 24px;
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
    margin-top: 0px;
  }
`;
const InterDescription = styled.div`
  width: 40.78vw; /* 783px / 1920px * 100 = 40.78% */
  margin-bottom: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  @media (max-width: 768px) {
    width: 100%;
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
  height: 3.59vw;
  @media (max-width: 768px) {
    font-size: 8px;
    height: auto;
  }
`;
const LevelSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0;
  @media (max-width: 768px) {
    display: none; /* 모바일에서는 레벨 섹션 숨김 */
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
  border-color: #868686;
  border-width: 1px;
  border-style: solid;
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
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
