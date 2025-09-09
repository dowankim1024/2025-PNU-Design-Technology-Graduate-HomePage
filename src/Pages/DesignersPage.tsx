import { DesignerCard } from "@/components/DesignerCard";
import styled from "styled-components";
import { Title } from "@/components/Title";
import { Suspense, useMemo } from "react";
import { useDesignerCards } from "@/queries/designers";
import SuspenseFallback from "@/components/common/SuspenseFallback";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const DesignersGridContent = () => {
  const { data } = useDesignerCards();
  const designers = useMemo(() => data ?? [], [data]);
  return (
    <DesignerGrid>
      {designers.map(d => (
        <DesignerCard
          key={`${d.name}-${d.projectName}`}
          name={d.name}
          projectName={d.projectName}
        />
      ))}
    </DesignerGrid>
  );
};

export const DesignersPage = () => {
  return (
    <DesignersPageContainer>
      <Title>DESIGNERS</Title>
      <ErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <DesignersGridContent />
        </Suspense>
      </ErrorBoundary>
      <div style={{ height: "8.33vw" }}></div>
    </DesignersPageContainer>
  );
};
const DesignersPageContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const DesignerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  margin-top: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 40px;
    padding: 0 12px;
  }
`;
