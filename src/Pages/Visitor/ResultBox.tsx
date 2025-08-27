import styled from "styled-components";

interface ResultBoxProps {
  sender?: string;
  message?: string;
  receiver?: string;
  isEmpty?: boolean;
}

export const ResultBox = ({
  sender,
  message,
  receiver,
  isEmpty = true,
}: ResultBoxProps) => {
  return (
    <Container>
      {!isEmpty ? (
        <>
          <Receiver>To. {receiver}</Receiver>
          <Message>{message}</Message>
          <Sender>From. {sender}</Sender>
        </>
      ) : (
        <EmptyMessage>메시지를 남겨보세요</EmptyMessage>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 20vw; /* 384px / 1920px * 100 = 20% */
  min-height: 8.33vw; /* 160px / 1920px * 100 = 8.33% */
  padding: 1.67vw; /* 32px / 1920px * 100 = 1.67% */
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  gap: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    gap: 4px;
  }
`;
const Sender = styled.div`
  font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
  align-self: flex-end;
  @media (max-width: 768px) {
    font-size: 6px;
  }
`;
const Message = styled.div`
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 145%;
  letter-spacing: 0;
  color: #080808;
  flex: 1;
  word-wrap: break-word;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    font-size: 6px;
  }
`;
const Receiver = styled.div`
  font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  color: #080808;
  @media (max-width: 768px) {
    font-size: 6px;
  }
`;

const EmptyMessage = styled.div`
  font-size: 0.83vw; /* 16px / 1920px * 100 = 0.83% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  text-align: center;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 6px;
  }
`;
