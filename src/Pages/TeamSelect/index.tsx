import { Title } from "@/components/Title";
import styled from "styled-components";
import TeamButton from "@/assets/Icons/TeamButton.png";
import { useNavigate } from "react-router-dom";
import { useTeamInfo } from "@/queries/designers";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import SuspenseFallback from "@/components/common/SuspenseFallback";
import { Suspense, useEffect, useMemo, useState } from "react";

export const TeamSelect = () => {
  return (
    <>
      <Title>TEAM PROJECT</Title>
      <ErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <TeamSelectContent />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

const TeamSelectContent = () => {
  const navigate = useNavigate();
  const { data } = useTeamInfo();
  const list = useMemo(() => (data ? Object.keys(data) : []), [data]);
  const defaultKey = useMemo(
    () => (data?.Brand ? "Brand" : (list[0] ?? "")),
    [data, list]
  );
  const [selectedKey, setSelectedKey] = useState<string>(defaultKey);
  useEffect(() => {
    setSelectedKey(defaultKey);
  }, [defaultKey]);

  const handleGo = (key: string) => {
    const qs = new URLSearchParams({ team: key });
    navigate(`/team-detail?${qs.toString()}`);
  };
  const selected = selectedKey ? data?.[selectedKey] : undefined;
  const teammates = selected?.TeamMates
    ? Object.values(selected.TeamMates)
    : [];
  return (
    <MainContainer>
      <TeamSelectContainer>
        <TeamImage onClick={() => selectedKey && handleGo(selectedKey)} />
        <TeamInfo>
          <TeamNameMateContainer>
            <TeamName>{selected?.TeamName ?? "Team Select"}</TeamName>
            <TeammateContainer>
              {teammates.map(name => (
                <Teammate key={name}>{name}</Teammate>
              ))}
            </TeammateContainer>
          </TeamNameMateContainer>
          <TeamConcept>{selected?.Concept ?? "팀을 선택하세요."}</TeamConcept>
        </TeamInfo>

        <TeamSelectButtonContainer>
          {list.map(key => (
            <TeamSelectButton
              key={key}
              $active={key === selectedKey}
              onClick={() => setSelectedKey(key)}
            >
              <ButtonImage
                $active={key === selectedKey}
                src={TeamButton}
                alt="Button"
                draggable={false}
              />
              <ButtonText $active={key === selectedKey}>
                {data?.[key]?.Initial ?? key.charAt(0)}
              </ButtonText>
            </TeamSelectButton>
          ))}
        </TeamSelectButtonContainer>
      </TeamSelectContainer>
    </MainContainer>
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
  cursor: pointer;
`;
const TeamInfo = styled.div`
  display: flex;
  height: 31.35vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
`;
const TeamNameMateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TeamName = styled.div`
  writing-mode: vertical-rl;
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
  white-space: nowrap;
`;
const TeammateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
  margin-left: 0.16vw; /* 3px @1920 */
  margin-top: 0.83vw; /* 16px @1920 */
`;
const Teammate = styled.div`
  writing-mode: vertical-rl;
  text-orientation: sideways;
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
const TeamSelectButton = styled.div<{ $active?: boolean }>`
  width: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  height: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 200ms ease,
    color 200ms ease;
  background-color: ${({ $active }) => ($active ? "#080808" : "transparent")};
`;

const ButtonImage = styled.img<{ $active?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  mix-blend-mode: ${({ $active }) => ($active ? "luminosity" : "normal")};
`;

const ButtonText = styled.div<{ $active?: boolean }>`
  position: relative;
  z-index: 2;
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: ${({ $active }) => ($active ? "#ffffff" : "#080808")};
`;
