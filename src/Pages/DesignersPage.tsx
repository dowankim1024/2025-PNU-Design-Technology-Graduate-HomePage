import { Header } from "@/components/Header";
import { DesignerCard } from "@/components/DesignerCard";
import styled from "styled-components";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { useEffect, useState } from "react";
import {
  fetchDesignerCards,
  type DesignerCardData,
} from "@/services/designers";

export const DesignersPage = () => {
  const [designers, setDesigners] = useState<DesignerCardData[]>([]);

  useEffect(() => {
    fetchDesignerCards().then(setDesigners).catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <Title>DESIGNERS</Title>
      <DesignerGrid>
        {designers.map(d => (
          <DesignerCard
            key={`${d.name}-${d.projectName}`}
            name={d.name}
            projectName={d.projectName}
          />
        ))}
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
