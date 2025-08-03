import styled from "styled-components";

interface PosterProps {
  title: string;
  description: string;
}

export const Poster = ({ title, description }: PosterProps) => {
  return (
    <PostContainer>
      <PosterDescription>
        <Title>POSTER</Title>
        <PosterDescriptionTitle>{title}</PosterDescriptionTitle>
        <Description>{description}</Description>
      </PosterDescription>
      <PosterImage />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  width: 100%;
  padding: 0 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
`;

const PosterImage = styled.div`
  width: 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  height: 33.33vw; /* 640px / 1920px * 100 = 33.33% */
  background-color: #f0f0f0;
`;
const PosterDescription = styled.div`
  width: 42.08vw; /* 808px / 1920px * 100 = 42.08% */
  height: 8.02vw; /* 154px / 1920px * 100 = 8.02% */
`;
const Title = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.15vw; /* 22px / 1920px * 100 = 1.15% */
  line-height: 140%;
  letter-spacing: 0;
  color: #080404;
  margin-bottom: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;
const PosterDescriptionTitle = styled.div`
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
