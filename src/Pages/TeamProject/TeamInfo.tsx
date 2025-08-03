import styled from "styled-components";
import WebTeam from "@/assets/TeamImage/WebTeam.png";
import Plus from "@/assets/Icons/Plus.png";

interface TeamInfoProps {
  teamName: string;
  teammates: { [key: string]: string };
  description: string;
}

export const TeamInfo = ({
  teamName,
  teammates,
  description,
}: TeamInfoProps) => {
  return (
    <TeamProjectMain>
      <LeftSection>
        <TeamImg />
        <TeamImageSource src={WebTeam} alt="Team Image" />
        <PlusButton src={Plus} alt="Plus Button" />
      </LeftSection>
      <TeamInfoDescription>
        <TeamName>{teamName}</TeamName>
        <Teammates>
          {Object.entries(teammates).map(([key, value]) => (
            <Teammate key={key}>{value}</Teammate>
          ))}
        </Teammates>
        <Description>{description}</Description>
      </TeamInfoDescription>
    </TeamProjectMain>
  );
};

const TeamProjectMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-bottom: 7.08vw; /* 136px / 1920px * 100 = 7.08% */
`;
const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const TeamImg = styled.div`
  width: 33.23vw; /* 638px / 1920px * 100 = 33.23% */
  height: 20.73vw; /* 398px / 1920px * 100 = 20.73% */
  background-color: #f0f0f0;
  align-self: flex-start;
`;
const TeamInfoDescription = styled.div`
  flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
  align-self: flex-end;
  margin-left: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  width: 23.28vw; /* 447px / 1920px * 100 = 23.28% */
`;
const TeamName = styled.div`
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;
const Teammates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  gap: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;
const Teammate = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  text-decoration: underline;
  text-underline-offset: 0.16vw; /* 3px / 1920px * 100 = 0.16% */
  text-decoration-thickness: 0;
  text-decoration-color: #080404;
`;
const Description = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 145%;
  letter-spacing: 0;
  color: #080404;
`;
const TeamImageSource = styled.img`
  width: 30.89vw; /* 593px / 1920px * 100 = 30.89% */
  height: 26.56vw; /* 510px / 1920px * 100 = 26.56% */
  position: absolute;
  top: -2.92vw; /* -56px / 1920px * 100 = -2.92% */
  left: -7.29vw; /* -140px / 1920px * 100 = -7.29% */
  z-index: -1;
`;
const PlusButton = styled.img`
  width: 4.27vw; /* 82px / 1920px * 100 = 4.27% */
  height: 4.27vw; /* 82px / 1920px * 100 = 4.27% */
  position: absolute;
  top: -2.92vw; /* -56px / 1920px * 100 = -2.92% */
  right: -2.14vw; /* -41px / 1920px * 100 = -2.14% */
`;
