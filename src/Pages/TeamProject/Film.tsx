import styled from "styled-components";

interface FilmProps {
  title: string;
  description: string;
}

export const Film = ({ title, description }: FilmProps) => {
  return (
    <FilmSection>
      <FilmDescription>
        <Tag>TEAM FILM</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </FilmDescription>
      <FilmImage />
    </FilmSection>
  );
};
const FilmSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
`;
const FilmImage = styled.div`
  width: 33.23vw; /* 638px / 1920px * 100 = 33.23% */
  height: 20.73vw; /* 398px / 1920px * 100 = 20.73% */
  background-color: #f0f0f0;
`;
const FilmDescription = styled.div`
  width: 27.6vw; /* 530px / 1920px * 100 = 27.60% */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Tag = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.15vw; /* 22px / 1920px * 100 = 1.15% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;
const Title = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
`;
const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  line-height: 145%;
  letter-spacing: 0;
  color: #080404;
`;
