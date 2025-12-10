import styled from "styled-components";
import { ResultBox } from "./ResultBox";
import { useRef, useEffect, useState } from "react";

interface Message {
  sender: string;
  message: string;
  receiver: string;
}

interface ResultSectionProps {
  messages: Message[];
}

export const ResultSection = ({ messages }: ResultSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState<Message[][]>([[], [], []]);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // 실제 DOM 높이를 측정하여 메시지 배치
  useEffect(() => {
    if (!containerRef.current) return;

    const cols: Message[][] = [[], [], []];
    const columnHeights: number[] = [0, 0, 0];

    // 임시로 모든 메시지를 렌더링하여 높이 측정
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "absolute";
    tempContainer.style.visibility = "hidden";
    tempContainer.style.width = isMobile
      ? `${(containerRef.current.offsetWidth - 8) / 3}px`
      : `${containerRef.current.offsetWidth * 0.2}px`;
    document.body.appendChild(tempContainer);

    const messageHeights: number[] = [];

    messages.forEach(message => {
      const tempBox = document.createElement("div");
      tempBox.style.width = "100%";
      tempBox.style.padding = isMobile
        ? "12px"
        : `${containerRef.current!.offsetWidth * 0.0167}px`;
      tempBox.style.boxSizing = "border-box";
      tempBox.style.backgroundColor = "#ededed";
      tempBox.style.display = "flex";
      tempBox.style.flexDirection = "column";
      tempBox.style.gap = isMobile
        ? "4px"
        : `${containerRef.current!.offsetWidth * 0.0083}px`;

      const receiver = document.createElement("div");
      receiver.textContent = `To. ${message.receiver}`;
      receiver.style.fontSize = isMobile
        ? "8px"
        : `${containerRef.current!.offsetWidth * 0.0104}px`;
      receiver.style.fontWeight = "700";
      receiver.style.lineHeight = "140%";

      const messageText = document.createElement("div");
      messageText.textContent = message.message;
      messageText.style.fontSize = isMobile
        ? "9px"
        : `${containerRef.current!.offsetWidth * 0.0083}px`;
      messageText.style.fontWeight = "400";
      messageText.style.lineHeight = "145%";
      messageText.style.wordWrap = "break-word";
      messageText.style.whiteSpace = "pre-wrap";
      messageText.style.flex = "1";

      const sender = document.createElement("div");
      sender.textContent = `From. ${message.sender}`;
      sender.style.fontSize = isMobile
        ? "8px"
        : `${containerRef.current!.offsetWidth * 0.0104}px`;
      sender.style.fontWeight = "700";
      sender.style.lineHeight = "140%";
      sender.style.alignSelf = "flex-end";

      tempBox.appendChild(receiver);
      tempBox.appendChild(messageText);
      tempBox.appendChild(sender);
      tempContainer.appendChild(tempBox);

      // 높이 측정
      const height = tempBox.offsetHeight;
      messageHeights.push(height);
    });

    document.body.removeChild(tempContainer);

    // 높이를 기반으로 메시지 배치
    messages.forEach((message, messageIndex) => {
      if (messageIndex < 3) {
        // 처음 3개는 순서대로
        cols[messageIndex].push(message);
        columnHeights[messageIndex] = messageHeights[messageIndex];
      } else {
        // 나머지는 가장 낮은 컬럼에 배치
        const lowestColumnIndex = columnHeights.indexOf(
          Math.min(...columnHeights)
        );
        cols[lowestColumnIndex].push(message);

        const gap = isMobile ? 4 : containerRef.current!.offsetWidth * 0.0083;
        columnHeights[lowestColumnIndex] +=
          messageHeights[messageIndex] +
          (cols[lowestColumnIndex].length > 1 ? gap : 0);
      }
    });

    setColumns(cols);
  }, [messages, isMobile]);

  return (
    <Container ref={containerRef}>
      <ResultColumn>
        {columns[0].map((msg, index) => (
          <ResultBox
            key={`col0-${index}`}
            sender={msg.sender}
            message={msg.message}
            receiver={msg.receiver}
            isEmpty={false}
          />
        ))}
      </ResultColumn>
      <ResultColumn>
        {columns[1].map((msg, index) => (
          <ResultBox
            key={`col1-${index}`}
            sender={msg.sender}
            message={msg.message}
            receiver={msg.receiver}
            isEmpty={false}
          />
        ))}
      </ResultColumn>
      <ResultColumn>
        {columns[2].map((msg, index) => (
          <ResultBox
            key={`col2-${index}`}
            sender={msg.sender}
            message={msg.message}
            receiver={msg.receiver}
            isEmpty={false}
          />
        ))}
      </ResultColumn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4.17vw; /* 80px / 1920px * 100 = 4.17% */
  margin-bottom: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    gap: 4px;
    flex: 1;
  }
`;
const ResultColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  width: 20vw; /* ResultBox와 같은 너비 */
  flex: 0 0 20vw;
  @media (max-width: 768px) {
    flex: 1 1 0;
    min-width: 0;
    gap: 4px;
  }
`;
