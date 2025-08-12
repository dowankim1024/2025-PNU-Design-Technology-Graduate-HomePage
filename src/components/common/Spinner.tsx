import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  size?: number; // px
  thickness?: number; // px
}

export const Spinner = ({ size = 40, thickness = 4 }: SpinnerProps) => {
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

const Loader = styled.div<{ $size: number; $thickness: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: ${({ $thickness }) => $thickness}px solid #e5e7eb;
  border-top-color: #111827;
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
`;

export default Spinner;
