import styled from "styled-components";
import Designer from "@/assets/Designer.jpg";

export const DesignerCard = () => {
  return (
    <CardContainer>
      <DesignerImg src={Designer} alt="designerImg" />
      <DesignerInfo>
        <DesignerName>김도완</DesignerName>
        <ProjectName>우리의 괴물</ProjectName>
      </DesignerInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DesignerImg = styled.img`
  width: 14.69vw; /* 282px / 1920px * 100 = 14.69% */
  height: 18.33vw; /* 352px / 1920px * 100 = 18.33% */
`;
const DesignerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.42vw; /* 8px / 1920px * 100 = 0.42% */
  width: 100%;
`;
const DesignerName = styled.div`
  font-family: Pretendard;
  font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Bold;
`;
const ProjectName = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Regular;
`;
