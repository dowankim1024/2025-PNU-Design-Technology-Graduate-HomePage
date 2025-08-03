import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListSelectBox } from "@/components/ListSelectBox";
import { MainContainer } from "@/components/MainContainer";
import { Title } from "@/components/Title";
import { TeamInfo } from "./TeamInfo";
import { Concept } from "@/components/Concept";
import { Film } from "./Film";
import { Inter } from "./Inter";
import {
  TeamInterData,
  TeamConceptData,
  TeamFilmData,
  TeamInfoData,
  ListData2,
} from "@/mockData/mock";

export const TeamProject = () => {
  return (
    <>
      <Header />

      <Title>TEAM PROJECT</Title>
      <MainContainer>
        <TeamInfo
          teamName={TeamInfoData.teamName}
          teammates={TeamInfoData.teammates}
          description={TeamInfoData.description}
        />
        <Concept
          title={TeamConceptData.title}
          description={TeamConceptData.description}
        />
        <Film
          title={TeamFilmData.title}
          description={TeamFilmData.description}
        />
        <Inter
          title={TeamInterData.title}
          description={TeamInterData.description}
          levelDescription={TeamInterData.levelDescription}
        />
      </MainContainer>
      <ListSelectBox list={ListData2} />
      <Footer />
    </>
  );
};
