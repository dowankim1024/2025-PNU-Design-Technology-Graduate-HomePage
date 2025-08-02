import styled from "styled-components";

export const Inter = () => {
  return (
    <InterContainer>
      <InterImage />
      <DescriptionContainer>
        <InterDescription>
          <InteractionArt>INTERACTION ART</InteractionArt>
          <Title>괴물 만들기</Title>
          <Description>
            안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을
            사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과
            학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다.
            저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까,
            박세은입니다.
          </Description>
        </InterDescription>
        <LevelSection>
          <LevelContainer>
            <LevelImage />
            <LevelDescription>1. 자신만의 캐릭터를 만든다.</LevelDescription>
          </LevelContainer>
          <LevelContainer>
            <LevelImage />
            <LevelDescription>2. 자신의 캐릭터를 확인한다.</LevelDescription>
          </LevelContainer>
          <LevelContainer>
            <LevelImage />
            <LevelDescription>3. 옆에 비춰진 빔을 본다.</LevelDescription>
          </LevelContainer>
        </LevelSection>
      </DescriptionContainer>
    </InterContainer>
  );
};
const InterContainer = styled.div`
  width: 100%;
  height: 28.33vw; /* 544px / 1920px * 100 = 28.33% */
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
`;
const InterImage = styled.div`
  width: 20.05vw; /* 385px / 1920px * 100 = 20.05% */
  height: 28.33vw; /* 544px / 1920px * 100 = 28.33% */
  background-color: #f0f0f0;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InterDescription = styled.div`
  width: 40.78vw; /* 783px / 1920px * 100 = 40.78% */
  height: 8.02vw; /* 154px / 1920px * 100 = 8.02% */
  margin-bottom: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
`;
const InteractionArt = styled.div`
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
  margin-bottom: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
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
