import styled from "styled-components";

interface InterProps {
  title: string;
  description: string;
  levelDescription: string[];
}

export const Inter = ({ title, description, levelDescription }: InterProps) => {
  return (
    <InterSection>
      <InterImage />
      <DescriptionContainer>
        <InterDescription>
          <Tag>TEAM INTERACTION ART</Tag>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InterDescription>
        <LevelSection>
          <LevelContainer>
            <LevelImage />
            <LevelDescription>{levelDescription[0]}</LevelDescription>
          </LevelContainer>
          <LevelContainer>
            <LevelImage />
            <LevelDescription>{levelDescription[1]}</LevelDescription>
          </LevelContainer>
          <LevelContainer>
            <LevelImage />
            <LevelDescription>{levelDescription[2]}</LevelDescription>
          </LevelContainer>
        </LevelSection>
      </DescriptionContainer>
    </InterSection>
  );
};
const InterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8.33vw; /* 200px / 1920px * 100 = 10.42% */
`;
const InterImage = styled.div`
  width: 385px;
  height: 544px;
  background-color: #f0f0f0;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InterDescription = styled.div`
  width: 783px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px; /* 80px / 1920px * 100 = 4.17% */
`;
const Tag = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.15vw; /* 22px / 1920px * 100 = 1.15% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;
const Title = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.83vw; /* 4px / 1920px * 100 = 0.21% */
`;
const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 145%;
  letter-spacing: 0;
  color: #080404;
`;
const LevelSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
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
`;
const LevelDescription = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
`;
