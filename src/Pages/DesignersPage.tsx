import { Header } from "@/components/Header";
import { DesignerCard } from "@/components/DesignerCard";
import styled from "styled-components";
import { Footer } from "@/components/Footer";

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

const Title = styled.div`
  font-family: Pretendard;
  font-size: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Bold;
  margin-top: 5.21vw; /* 100px / 1920px * 100 = 5.21% */
  margin-left: 18.75vw; /* 360px / 1920px * 100 = 18.75% */
`;

const DesignerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  margin-top: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
`;
