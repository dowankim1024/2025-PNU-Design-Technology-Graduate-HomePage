import styled from "styled-components";
import { Title } from "../DesignersPage";
import TeamProjectWatch from "@/assets/TeamProjectWatch.png";
import Plus from "@/assets/Icons/Plus.png";

export const DesignerInfo = () => {
  return (
    <>
      <Title>DESIGNER</Title>
      <MainContainer>
        <ContentSection>
          <LeftSection>
            <ImagePlaceholder />
            <TeamProjectButton
              src={TeamProjectWatch}
              alt="Team Project Watch"
            />
          </LeftSection>
          <RightBlock>
            <DesignerName>박세은</DesignerName>
            <DesignerNameEnglish>Park Se Eun</DesignerNameEnglish>
            <DesignerEmail>03eungreen@naver.com</DesignerEmail>
            <DesignerIntro>
              안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을
              사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과
              학생이며 디자인을 사랑하는 사람입니다.
            </DesignerIntro>
          </RightBlock>

          <PlusButton src={Plus} alt="Plus" />
        </ContentSection>
        <ConceptSection>
          <Concept>CONCEPT</Concept>
          <ConceptTitle>가까이서 보면 비극 멀리서 보면 희극</ConceptTitle>
          <ConceptDescription>
            안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을
            사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과
            학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다.
            저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까,
            박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.
          </ConceptDescription>
        </ConceptSection>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  margin-top: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  box-sizing: border-box;
`;

const ContentSection = styled.div`
  position: relative;
  display: flex;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImagePlaceholder = styled.div`
  width: 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  height: 23.44vw; /* 450px / 1920px * 100 = 23.44% */
  background-color: #f5f5f5;
`;

const RightBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  align-self: flex-end;
`;

const DesignerName = styled.div`
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 700;
  color: #080404;
  line-height: 140%;
  letter-spacing: 0;
`;

const DesignerNameEnglish = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  color: #080404;
  letter-spacing: 0;
  line-height: 140%;
`;

const DesignerEmail = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  opacity: 40%;
  margin: 0;
`;

const DesignerIntro = styled.div`
  font-family: Pretendard;
  max-width: 26.67vw; /* 512px / 1920px * 100 = 26.67% */
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  color: #080404;
  line-height: 145%;
  margin-top: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  letter-spacing: 0;
`;

const TeamProjectButton = styled.img`
  width: 21.67vw; /* 416px / 1920px * 100 = 21.67% */
  height: 18.33vw; /* 352px / 1920px * 100 = 18.33% */
  position: absolute;
  bottom: -2.92vw; /* -56px / 1920px * 100 = -2.92% */
  left: -6.25vw; /* -120px / 1920px * 100 = -6.25% */
  z-index: -1;
`;

const PlusButton = styled.img`
  width: 4.27vw; /* 82px / 1920px * 100 = 4.27% */
  height: 4.27vw; /* 82px / 1920px * 100 = 4.27% */
  position: absolute;
  top: 0;
  right: 0;
`;
const ConceptSection = styled.div`
  width: 100%;
  margin-top: 7.08vw; /* 136px / 1920px * 100 = 7.08% */
  display: flex;
  flex-direction: column;
`;

const Concept = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.15vw; /* 22px / 1920px * 100 = 1.15% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
`;
const ConceptTitle = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-top: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;
const ConceptDescription = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 145%;
  letter-spacing: 0;
  color: #080404;
  margin-top: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  margin-bottom: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
`;
