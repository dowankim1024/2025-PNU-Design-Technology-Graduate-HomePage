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
  height: 544px;
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 160px; /* 80px / 1920px * 100 = 4.17% */
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
  height: 154px;
  margin-bottom: 32px; /* 80px / 1920px * 100 = 4.17% */
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
  font-size: 24px; /* 24px / 1920px * 100 = 1.25% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 16px; /* 4px / 1920px * 100 = 0.21% */
`;
const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px; /* 16px / 1920px * 100 = 0.83% */
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
  width: 250px;
  height: 156px;
  background-color: #f0f0f0;
  margin-bottom: 8px; /* 4px / 1920px * 100 = 0.21% */
`;
const LevelDescription = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 16px; /* 16px / 1920px * 100 = 0.83% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
`;
