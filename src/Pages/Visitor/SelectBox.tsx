import styled from "styled-components";
import { useState } from "react";
import FormFrame from "@/assets/FormFrame.png";

interface SelectBoxProps {
  toOptions: string[];
  onToChange?: (value: string) => void;
  onFromChange?: (value: string) => void;
}

export const SelectBox = ({
  toOptions,
  onToChange,
  onFromChange,
}: SelectBoxProps) => {
  const [toValue, setToValue] = useState(toOptions[0] || "");
  const [fromValue, setFromValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isToOpen, setIsToOpen] = useState(false);

  const handleToChange = (value: string) => {
    setToValue(value);
    setIsToOpen(false);
    onToChange?.(value);
  };

  const handleFromChange = (value: string) => {
    setFromValue(value);
    onFromChange?.(value);
  };

  const handleSend = () => {
    // 보내기 로직 구현
    console.log("메시지 전송:", {
      to: toValue,
      from: fromValue,
      message: messageValue,
    });
  };

  return (
    <Container>
      <SelectBoxContainer>
        <SelectSection className="to-section">
          <SelectLabel>To.</SelectLabel>
          <SelectContent>
            <SelectValue onClick={() => setIsToOpen(!isToOpen)}>
              {toValue}
              <DropdownArrow>▼</DropdownArrow>
            </SelectValue>
            {isToOpen && (
              <DropdownList>
                {toOptions.map(option => (
                  <DropdownItem
                    key={option}
                    onClick={() => handleToChange(option)}
                  >
                    {option}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </SelectContent>
        </SelectSection>

        <SelectSection className="from-section">
          <SelectLabel>From.</SelectLabel>
          <SelectContent>
            <FromInput
              type="text"
              value={fromValue}
              onChange={e => handleFromChange(e.target.value)}
              placeholder="보내는 이"
            />
          </SelectContent>
        </SelectSection>
      </SelectBoxContainer>
      <MessageSection>
        <MessageFrame src={FormFrame} alt="Message Frame" />
        <MessageTextarea
          placeholder="졸업전시 축하드립니다."
          value={messageValue}
          onChange={e => setMessageValue(e.target.value)}
        />
      </MessageSection>

      <SendButton onClick={handleSend}>보내기</SendButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SelectBoxContainer = styled.div`
  align-self: flex-end;
  width: 320px;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #080808 0,
      #080808 8px,
      transparent 8px,
      transparent 16px
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #080808 0,
      #080808 8px,
      transparent 8px,
      transparent 16px
    );
  }
`;

const SelectSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  padding: 16px 0; /* 16px / 1920px * 100 = 0.83% */
  position: relative;

  &.to-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #080808 0,
      #080808 8px,
      transparent 8px,
      transparent 16px
    );
  }
`;

const SelectLabel = styled.div`
  font-family: Pretendard;
  font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  font-weight: 700;
  color: #080808;
  white-space: nowrap;
`;

const SelectContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.42vw 0.83vw; /* 8px 16px / 1920px * 100 = 0.42% 0.83% */
  font-family: Pretendard;
  font-size: 20px; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  color: #080808;
  cursor: pointer;
  border-radius: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
  position: relative;
`;

const DropdownArrow = styled.span`
  font-size: 0.63vw; /* 12px / 1920px * 100 = 0.63% */
  color: #080808;
  transition: transform 0.2s;
  position: absolute;
  right: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #e0e0e0;
  border-radius: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
  box-shadow: 0 0.21vw 0.42vw rgba(0, 0, 0, 0.1); /* 4px 8px / 1920px * 100 */
  z-index: 1000;
  max-height: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  overflow-y: auto;
  background-color: white;
`;

const DropdownItem = styled.div`
  padding: 0.42vw 0.83vw; /* 8px 16px / 1920px * 100 = 0.42% 0.83% */
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  color: #080808;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const FromInput = styled.input`
  width: 100%;
  padding: 0.42vw 0.83vw; /* 8px 16px / 1920px * 100 = 0.42% 0.83% */
  font-family: Pretendard;
  font-size: 20px; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  color: #080808;
  border: none;
  outline: none;
  background: transparent;
  text-align: center;

  &::placeholder {
    color: #666666;
  }
`;

const MessageSection = styled.div`
  position: relative;
  margin-top: 24px; /* 32px / 1920px * 100 = 1.67% */
`;

const MessageFrame = styled.img`
  width: 100%;
  height: auto;
`;

const MessageTextarea = styled.textarea`
  position: absolute;
  top: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  left: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  right: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  bottom: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  border: none;
  outline: none;
  background: transparent;
  font-family: Pretendard;
  font-size: 20px; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
  resize: none;

  &::placeholder {
    color: #666666;
  }
`;

const SendButton = styled.button`
  width: 154px;
  height: 54px;
  align-self: flex-end;
  padding: 0.83vw 1.67vw; /* 16px 32px / 1920px * 100 = 0.83% 1.67% */
  margin-top: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  background-color: #080808;
  color: white;
  border: none;
  border-radius: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
  font-family: Pretendard;
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333333;
  }
`;
