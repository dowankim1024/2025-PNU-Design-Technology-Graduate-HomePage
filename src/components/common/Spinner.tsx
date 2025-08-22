import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  // number는 px로 처리, string은 CSS 길이 단위(vw 등) 그대로 사용
  size?: number | string;
  thickness?: number | string;
}

// 1920 기준: 40px -> 2.08vw, 4px -> 0.21vw
export const Spinner = ({
  size = "2.08vw",
  thickness = "0.21vw",
}: SpinnerProps) => {
  return (
    <Wrapper>
      <Loader $size={size} $thickness={thickness} />
    </Wrapper>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

const Loader = styled.div<{
  $size: number | string;
  $thickness: number | string;
}>`
  width: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};
  border: ${({ $thickness }) =>
      typeof $thickness === "number" ? `${$thickness}px` : $thickness}
    solid #e5e7eb;
  border-top-color: #111827;
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
`;

export default Spinner;
