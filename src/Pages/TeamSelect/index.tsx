import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import styled from "styled-components";
import TeamButton from "@/assets/Icons/TeamButton.png";

interface TeamSelectProps {
  teamName: string;
  teammates: string[];
  concept: string;
}
export const TeamSelect = ({
  teamName,
  teammates,
  concept,
}: TeamSelectProps) => {
  return (
    <>
      <Header />
      <Title>TEAM PROJECT</Title>
      <MainContainer>
        <TeamSelectContainer>
          <TeamImage />
          <TeamInfo>
            <TeamName>{teamName}</TeamName>
            <TeammateContainer>
              {teammates.map(teammate => (
                <Teammate key={teammate}>{teammate}</Teammate>
              ))}
            </TeammateContainer>
          </TeamInfo>

          <TeamConcept>{concept}</TeamConcept>
          <TeamSelectButtonContainer>
            <TeamSelectButton>
              <ButtonImage src={TeamButton} alt="Button" />
              <ButtonText>B</ButtonText>
            </TeamSelectButton>
            <TeamSelectButton>
              <ButtonImage src={TeamButton} alt="Button" />
              <ButtonText>D</ButtonText>
            </TeamSelectButton>
            <TeamSelectButton>
              <ButtonImage src={TeamButton} alt="Button" />
              <ButtonText>V</ButtonText>
            </TeamSelectButton>
            <TeamSelectButton>
              <ButtonImage src={TeamButton} alt="Button" />
              <ButtonText>W</ButtonText>
            </TeamSelectButton>
          </TeamSelectButtonContainer>
        </TeamSelectContainer>
      </MainContainer>
      <Footer />
    </>
  );
};
const MainContainer = styled.div`
  width: 100%;
  margin-top: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TeamSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
`;
const TeamImage = styled.div`
  width: 50.83vw; /* 976px / 1920px * 100 = 50.83% */
  height: 31.35vw; /* 602px / 1920px * 100 = 31.35% */
  background-color: #f0f0f0;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
`;
const TeamName = styled.div`
  rotate: 90deg;
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
  white-space: nowrap;
  position: absolute;
  top: 21.35vw; /* 410px / 1920px * 100 = 21.35% */
  left: 68.02vw; /* 1306px / 1920px * 100 = 68.02% */
`;
const TeammateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  position: absolute;
  top: 26.56vw; /* 510px / 1920px * 100 = 26.56% */
  left: 69.9vw; /* 1342px / 1920px * 100 = 69.90% */
`;
const Teammate = styled.div`
  rotate: 90deg;
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
  white-space: nowrap;
`;
const TeamConcept = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
`;
const TeamSelectButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  margin-left: auto;
  margin-bottom: auto; /* 32px / 1920px * 100 = 1.67% */
`;
const TeamSelectButton = styled.div`
  width: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  height: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ButtonText = styled.div`
  position: relative;
  z-index: 2;
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
`;
