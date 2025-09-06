import styled from "styled-components";
import HwaseLee from "@/assets/ProfessorImage/HwaseLee.webp";
import CheolKi from "@/assets/ProfessorImage/ChulgiKim.webp";
import TaeWan from "@/assets/ProfessorImage/TonyKim.webp";
import DongJin from "@/assets/ProfessorImage/DongjinHong.webp";
export default function Professor() {
  return (
    <Container>
      <Title>PROFESSORS</Title>
      <ProfessorsContainer>
        <ProfessorContainer>
          <ProfessorImage src={HwaseLee} />
          <ProfessorName>이화세</ProfessorName>
          <ProfessorDescription>HCI</ProfessorDescription>
        </ProfessorContainer>
        <ProfessorContainer>
          <ProfessorImage src={CheolKi} />
          <ProfessorName>김철기</ProfessorName>
          <ProfessorDescription>UX / AI / 감성공학</ProfessorDescription>
        </ProfessorContainer>
        <ProfessorContainer>
          <ProfessorImage src={TaeWan} />
          <ProfessorName>김태완</ProfessorName>
          <ProfessorDescription>DIGITAL CONTENT DESIGN</ProfessorDescription>
        </ProfessorContainer>
        <ProfessorContainer>
          <ProfessorImage src={DongJin} />
          <ProfessorName>홍동진</ProfessorName>
          <ProfessorDescription>IMAGE PROCESSING / ML</ProfessorDescription>
        </ProfessorContainer>
      </ProfessorsContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 111.11vmin; /* 1200px */
`;
const Title = styled.div`
  font-family: "Pretendard";
  font-size: 4.44vmin; /* 48px */
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  margin-bottom: 7.41vmin; /* 80px */
`;

const ProfessorsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProfessorImage = styled.img`
  width: 26.11vmin; /* 282px */
  height: 31.85vmin; /* 344px */
  background-color: #080404;
  object-fit: cover;
  object-position: top;
`;
const ProfessorName = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.85vmin; /* 20px */
  font-weight: 700;
  line-height: 1.4;
  color: #080404;
  margin-top: 0.74vmin; /* 8px */
`;
const ProfessorDescription = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.48vmin; /* 16px */
  font-weight: 400;
  line-height: 1.4;
  color: #080404;
`;
