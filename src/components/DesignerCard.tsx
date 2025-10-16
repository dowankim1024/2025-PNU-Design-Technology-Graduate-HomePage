import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface DesignerCardProps {
  name: string;
  projectName: string;
  image?: {
    after: string;
    before: string;
    sub: string;
  };
}

export const DesignerCard = ({
  name,
  projectName,
  image,
}: DesignerCardProps) => {
  const navigate = useNavigate();
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);

  const handleClick = () => {
    const params = new URLSearchParams({ name });
    navigate(`/designer?${params.toString()}`);
  };

  const beforeSrc = image?.before;
  const afterSrc = image?.after;

  return (
    <CardContainer onClick={handleClick} role="button" tabIndex={0}>
      <ImageContainer>
        {beforeSrc && (
          <DesignerImg
            src={beforeSrc}
            alt="designerImg"
            loading="eager"
            decoding="sync"
            onLoad={() => setBeforeLoaded(true)}
            $loaded={beforeLoaded}
          />
        )}
        {afterSrc && (
          <DesignerImgHover
            src={afterSrc}
            alt="designerImg hover"
            loading="eager"
            decoding="sync"
            onLoad={() => setAfterLoaded(true)}
            $loaded={afterLoaded}
          />
        )}
      </ImageContainer>
      <DesignerInfo>
        <DesignerName>{name}</DesignerName>
        <ProjectName>{projectName}</ProjectName>
      </DesignerInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 14.69vw; /* 282px / 1920px * 100 = 14.69% */
  height: 18.33vw; /* 352px / 1920px * 100 = 18.33% */
  overflow: hidden;
  background-color: #f5f5f5; /* 로딩 중 배경색 */
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const DesignerImg = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: opacity 0.3s ease;
  display: block;
  flex-shrink: 0;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`;

const DesignerImgHover = styled.img<{ $loaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: block;
  flex-shrink: 0;

  ${CardContainer}:hover & {
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  }
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const ProjectName = styled.div`
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  font-style: Regular;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
