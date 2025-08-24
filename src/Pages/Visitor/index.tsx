import { MainContainer } from "@/components/MainContainer";
import styled from "styled-components";
import { SelectBox } from "./SelectBox";
import { ResultSection } from "./ResultSection";
//
import {
  usePostGuestbookMessage,
  useGuestbookStream,
} from "@/queries/guestbook";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import SuspenseFallback from "@/components/common/SuspenseFallback";
import { Suspense } from "react";

// type alias removed; use GuestbookMessage directly in props if needed

export const Visitor = () => {
  const { mutateAsync: postMessage } = usePostGuestbookMessage();
  const messages = useGuestbookStream();

  const handleSendMessage = async (
    toValue: string,
    fromValue: string,
    messageValue: string
  ) => {
    await postMessage({
      sender: fromValue,
      message: messageValue,
      receiver: toValue,
    });
    // 구독 콜백이 목록을 갱신합니다 (낙관적 업데이트 불필요)
  };

  return (
    <>
      <Title>VISITOR'S BOOK</Title>
      <Tag>응원의 한마디를 남겨보세요.</Tag>
      <MainContainer>
        <VisitorContainer>
          <VisitorContent></VisitorContent>
          <SelectBox
            toOptions={[
              "ALL",
              "고영은",
              "공태우",
              "김가빈",
              "김관욱",
              "김도완",
              "김민채",
              "김예솔",
              "김진혁",
              "남현서",
              "박세은",
              "박정훈",
              "정일후",
              "천후민",
              "최보윤",
            ]}
            onSendMessage={handleSendMessage}
          />
        </VisitorContainer>
        <ErrorBoundary>
          <Suspense fallback={<SuspenseFallback />}>
            <ResultSection messages={messages} />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </>
  );
};
const Title = styled.div`
  font-family: Pretendard;
  font-size: 2.5vw; /* 48px / 1920px * 100 = 2.5% */
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  margin-left: 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  margin-top: 5.21vw; /* 100px / 1920px * 100 = 5.21% */
`;
const Tag = styled.div`
  font-family: Pretendard;
  font-size: 1.25vw; /* 24px / 1920px * 100 = 1.25% */
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0;
  margin-left: 18.75vw; /* 360px / 1920px * 100 = 18.75% */
  margin-top: 0.21vw; /* 4px / 1920px * 100 = 0.21% */
`;

const VisitorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const VisitorContent = styled.div`
  flex: 1;
`;
