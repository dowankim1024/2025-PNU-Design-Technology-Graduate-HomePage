import styled from "styled-components";

interface ConceptProps {
  title: string;
  description: string;
}

export const Concept = ({ title, description }: ConceptProps) => {
  return (
    <ConceptSection>
      <ConceptTag>CONCEPT</ConceptTag>
      <ConceptTitle>{title}</ConceptTitle>
      <ConceptDescription>{description}</ConceptDescription>
    </ConceptSection>
  );
};

const ConceptSection = styled.div`
  width: 100%;
  margin-top: 7.08vw; /* 136px / 1920px * 100 = 7.08% */
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const ConceptTag = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.15vw; /* 22px / 1920px * 100 = 1.15% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ConceptTitle = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-top: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ConceptDescription = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 145%;
  letter-spacing: 0;
  color: #080404;
  margin-top: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  margin-bottom: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  @media (max-width: 768px) {
    font-size: 8px;
    margin-bottom: 60px;
  }
`;
