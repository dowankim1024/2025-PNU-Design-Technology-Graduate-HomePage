import styled from "styled-components";

export const Intro = () => {
  return (
    <Container>
      <Title>INTRO</Title>
      <Description1>
        '클로즈업(close-up)'은 대상을 확대하여 화면에 가득차게 묘사하는
        기법입니다.
        <br />
        클로즈업은 단순한 확대를 넘어 새로운 시각을 발견하게 합니다.
        <br />
        이러한 접근은 사물, 순간, 일상에 내재된 의미를 다시 인식하게 합니다.
      </Description1>
      <Description2>
        이번 전시는 각자가 선택한 대상을 세밀하게 포착하고 해석한 결과물들로
        구성되었습니다.
        <br />
        가까이에서 바라볼 때 비로소 드러나는 감각과 이야기를 함께 경험해보세요.
      </Description2>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 4.44vmin; /* 48px */
  font-weight: 700;
  color: #080404;
  line-height: 1.4;
  letter-spacing: 0;
  text-align: center;
`;
const Description1 = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.85vmin; /* 20px */
  font-weight: 400;
  color: #080404;
  line-height: 1.45;
  letter-spacing: 0;
  text-align: center;
  margin-top: 5.56vmin; /* 60px */
`;
const Description2 = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.85vmin; /* 20px */
  font-weight: 400;
  color: #080404;
  line-height: 1.45;
  letter-spacing: 0;
  text-align: center;
  margin-top: 2.96vmin; /* 32px */
`;
