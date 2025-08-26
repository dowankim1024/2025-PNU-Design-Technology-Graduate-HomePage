import styled from "styled-components";

export const MadeBy = () => {
  return (
    <Container>
      <Title>MADE BY</Title>
      <ContentsContainer>
        <Image />
        <DescriptionContainer>
          <NameContainer>
            <Position>위원장</Position>
            <Name>김예솔</Name>
          </NameContainer>
          <Line />
          <NameContainer>
            <Position>부위원장</Position>
            <Name>고영은</Name>
          </NameContainer>
          <Line />
          <NameContainer>
            <Position>Branding</Position>
            <Names>
              <Name>김관욱</Name>
              <Name>김예솔</Name>
              <Name>최보윤</Name>
            </Names>
          </NameContainer>
          <Line />
          <NameContainer>
            <Position>DP</Position>
            <Names>
              <Name>박정훈</Name>
              <Name>남현서</Name>
              <Name>천후민</Name>
            </Names>
          </NameContainer>
          <Line />
          <NameContainer>
            <Position>Video</Position>
            <Names>
              <Name>공태우</Name>
              <Name>고영은</Name>
              <Name>김진혁</Name>
            </Names>
          </NameContainer>
          <Line />
          <NameContainer>
            <Position>Web</Position>
            <Names>
              <Name>김도완</Name>
              <Name>김가빈</Name>
              <Name>박세은</Name>
              <Name>정일후</Name>
            </Names>
          </NameContainer>
          <FinalLine />
        </DescriptionContainer>
      </ContentsContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 103.19vmin; /* 1114.35px */
`;
const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 4.44vmin; /* 48px */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5.56vmin; /* 60px */
  width: 100%;
`;
const Image = styled.div`
  width: 59.26vmin; /* 640px */
  height: 37.04vmin; /* 400px */
  background-color: #080404;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.96vmin; /* 442.35px */
  align-self: flex-end;
`;
const NameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Position = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.85vmin; /* 20px */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
`;
const Names = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.48vmin; /* 16px */
`;
const Name = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.85vmin; /* 20px */
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #080404;
  margin: 1.11vmin 0; /* 12px */
`;
const FinalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #080404;
  margin-top: 1.11vmin; /* 12px */
`;
