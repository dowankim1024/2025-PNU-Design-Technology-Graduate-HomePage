import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DesignerInfo } from "./DesignerInfo";
import { Poster } from "./Poster";
import { Inter } from "./Inter";
import { ListSelectBox } from "@/components/ListSelectBox";
import {
  PersonInterData,
  DesignerInfoData,
  DesignerPosterData,
  ListData,
} from "@/mockData/mock";

export const DesignerDetailPage = () => {
  return (
    <>
      <Header />
      <DesignerInfo
        name={DesignerInfoData.name}
        nameEnglish={DesignerInfoData.nameEnglish}
        email={DesignerInfoData.email}
        intro={DesignerInfoData.intro}
        conceptTitle={DesignerInfoData.conceptTitle}
        conceptDescription={DesignerInfoData.conceptDescription}
      />
      <Poster
        title={DesignerPosterData.title}
        description={DesignerPosterData.description}
      />
      <Inter
        title={PersonInterData.title}
        description={PersonInterData.description}
        levelDescription={PersonInterData.levelDescription}
      />
      <ListSelectBox list={ListData} />
      <Footer />
    </>
  );
};
