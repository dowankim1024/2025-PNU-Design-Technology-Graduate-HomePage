import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styled from "styled-components";

export const Layout = () => {
  return (
    <PageLayout>
      <Header />
      <MainArea>
        <Outlet />
      </MainArea>
      <Footer />
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
