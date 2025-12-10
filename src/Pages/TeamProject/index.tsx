import { ListSelectBox } from "@/components/ListSelectBox";
import { MainContainer } from "@/components/MainContainer";
import { Title } from "@/components/Title";
import { TeamInfo } from "./TeamInfo";
import { Concept } from "@/components/Concept";
import { Film } from "./Film";
import { Inter } from "./Inter";
import { Suspense } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import SuspenseFallback from "@/components/common/SuspenseFallback";
import { useTeamInfo } from "@/queries/designers";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const TeamContent = ({ teamKey }: { teamKey: string }) => {
  const { data } = useTeamInfo();
  const navigate = useNavigate();
  const team = data?.[teamKey];
  const list = data ? Object.keys(data) : [];
  if (!team) return null;
  return (
    <>
      <MainContainer>
        <TeamInfo
          teamName={team.TeamName}
          teammates={team.TeamMates}
          description={team.Description}
          teamKey={teamKey}
        />
        <Concept title={team.Concept} description={team.Explain} />
        <Film
          title={team.TeamFilm?.Title ?? team.TeamVideo?.Title ?? team.TeamName}
          description={
            team.TeamFilm?.Description ??
            team.TeamVideo?.Description ??
            team.Description
          }
          teamKey={teamKey}
        />
        <Inter
          title={team.TeamInter?.Title ?? team.TeamName}
          description={team.TeamInter?.Description ?? team.Description}
          levelDescription={(team.TeamInter?.LevelDescription ?? []).filter(
            (v): v is string => !!v
          )}
          teamKey={teamKey}
        />
      </MainContainer>
      <ListSelectBox
        list={list}
        currentName={teamKey}
        onNavigate={nextKey => {
          navigate(`/team-detail?team=${nextKey}`);
        }}
      />
    </>
  );
};

export const TeamProject = () => {
  const [params] = useSearchParams();
  const teamKey = params.get("team") ?? "Web";
  return (
    <Container>
      <Title>TEAM PROJECT</Title>
      <ErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <TeamContent teamKey={teamKey} />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};
const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
