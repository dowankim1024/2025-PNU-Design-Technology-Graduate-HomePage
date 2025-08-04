import styled from "styled-components";
import { ResultBox } from "./ResultBox";

interface Message {
  sender: string;
  message: string;
  receiver: string;
}

interface ResultSectionProps {
  messages: Message[];
}

export const ResultSection = ({ messages }: ResultSectionProps) => {
  // 각 컬럼의 메시지들을 분배
  const columns: Message[][] = [[], [], []];

  messages.forEach((message, messageIndex) => {
    // 처음 3개 메시지는 순서대로 배치
    if (messageIndex < 3) {
      columns[messageIndex].push(message);
      return;
    }

    // 4번째 메시지부터는 높이를 고려해서 배치
    const columnHeights = columns.map(col => {
      if (col.length === 0) return 0;

      // 각 ResultBox의 실제 높이 계산
      // min-height: 8.33vw + padding: 1.67vw * 2 = 11.67vw (최소)
      // 하지만 내용에 따라 더 커질 수 있음
      const gapHeight = 0.83; // vw 단위

      // 실제로는 각 박스의 내용 길이에 따라 높이가 달라질 수 있음
      // 일단 최소 높이로 계산하고, 나중에 실제 높이를 측정하는 방식으로 개선
      let totalHeight = 0;
      col.forEach((msg, index) => {
        // 메시지 길이에 따른 높이 추정
        const messageLines = Math.max(1, Math.ceil(msg.message.length / 30)); // 한 줄당 약 30자
        const estimatedHeight = Math.max(
          11.67,
          11.67 + (messageLines - 1) * 1.5
        ); // 줄당 약 1.5vw 추가
        totalHeight += estimatedHeight;
        if (index > 0) totalHeight += gapHeight;
      });

      return totalHeight;
    });

    console.log("Column heights:", columnHeights);
    const lowestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    console.log("Adding message to column:", lowestColumnIndex);
    columns[lowestColumnIndex].push(message);
  });

  return (
    <Container>
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
`;
const ResultColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  width: 20vw; /* ResultBox와 같은 너비 */
`;
