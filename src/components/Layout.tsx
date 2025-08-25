import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styled from "styled-components";

export const Layout = () => {
  const { pathname } = useLocation();
  const showFooter = pathname !== "/about"; // About에서는 내부 섹션으로 푸터 처리
  return (
    <PageLayout>
      <Header />
      <MainArea>
        <Outlet />
      </MainArea>
      {showFooter && <Footer />}
    </PageLayout>
  );
};

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 101vh;
`;

const MainArea = styled.main`
  flex: 1 0 auto;
  width: 100%;
`;

export default Layout;
