import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DesignerInfo } from "./DesignerInfo";
import { Poster } from "./Poster";
import { Inter } from "./Inter";
import { ListSelectBox } from "@/components/ListSelectBox";

export const DesignerDetailPage = () => {
  return (
    <>
      <Header />
      <DesignerInfo />
      <Poster />
      <Inter />
      <ListSelectBox />
      <Footer />
    </>
  );
};
