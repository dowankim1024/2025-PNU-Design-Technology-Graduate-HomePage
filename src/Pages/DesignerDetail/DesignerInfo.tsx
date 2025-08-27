import styled from "styled-components";
import { Title } from "@/components/Title";
import TeamProjectWatch from "@/assets/TeamProjectWatch.png";
import Plus from "@/assets/Icons/Plus.png";
import { MainContainer } from "@/components/MainContainer";
import { Concept } from "@/components/Concept";
import { useNavigate } from "react-router-dom";

interface DesignerInfoProps {
  team: string;
  name: string;
  nameEnglish: string;
  email: string;
  intro: string;
  conceptTitle: string;
  conceptDescription: string;
}

export const DesignerInfo = ({
  team,
  name,
  nameEnglish,
  email,
  intro,
  conceptTitle,
  conceptDescription,
}: DesignerInfoProps) => {
  const navigate = useNavigate();
  const goTo = (team: string) => {
    navigate(`/team-detail?team=${team}`);
  };
  return (
    <DesignerInfoContainer>
      <Title>DESIGNER</Title>
      <MainContainer>
        <ContentSection>
          <LeftSection>
            <ImagePlaceholder />
            <TeamProjectButton
              src={TeamProjectWatch}
              alt="Team Project Watch"
              onClick={() => {
                goTo(team);
              }}
            />
          </LeftSection>
          <RightBlock>
            <DesignerName>{name}</DesignerName>
            <DesignerNameEnglish>{nameEnglish}</DesignerNameEnglish>
            <DesignerEmail>{email}</DesignerEmail>
            <DesignerIntro>{intro}</DesignerIntro>
          </RightBlock>

          <PlusButton src={Plus} alt="Plus" />
        </ContentSection>
        <Concept title={conceptTitle} description={conceptDescription} />
      </MainContainer>
    </DesignerInfoContainer>
  );
};
const DesignerInfoContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ContentSection = styled.div`
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  z-index: 2;
  @media (max-width: 768px) {
    width: 180px;
    height: 225px;
  }
`;

const RightBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  align-self: flex-end;
  @media (max-width: 768px) {
    margin-left: 12px;
    height: 100%;
  }
`;

const DesignerName = styled.div`
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 700;
  color: #080404;
  line-height: 140%;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DesignerNameEnglish = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  color: #080404;
  letter-spacing: 0;
  line-height: 140%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
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
  @media (max-width: 768px) {
    font-size: 8px;
  }
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
  @media (max-width: 768px) {
    font-size: 8px;
    max-width: 100%;
  }
`;

const TeamProjectButton = styled.img`
  width: 21.67vw; /* 416px / 1920px * 100 = 21.67% */
  height: 18.33vw; /* 352px / 1920px * 100 = 18.33% */
  position: absolute;
  bottom: -2.92vw; /* -56px / 1920px * 100 = -2.92% */
  left: -6.25vw; /* -120px / 1920px * 100 = -6.25% */
  z-index: 1;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 180px;
    height: auto;
    bottom: 1px;
    left: -27.5px;
  }
`;

const PlusButton = styled.img`
  width: 4.27vw; /* 82px / 1920px * 100 = 4.27% */
  height: 4.27vw; /* 82px / 1920px * 100 = 4.27% */
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    right: 0px;
  }
`;
