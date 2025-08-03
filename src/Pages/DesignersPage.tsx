import { Header } from "@/components/Header";
import { DesignerCard } from "@/components/DesignerCard";
import styled from "styled-components";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";

export const DesignersPage = () => {
  return (
    <>
      <Header />
      <Title>DESIGNERS</Title>
      <DesignerGrid>
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
        <DesignerCard />
      </DesignerGrid>
      <div style={{ height: "8.33vw" }}></div>
      <Footer />
    </>
  );
};

const DesignerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  margin-top: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
`;
