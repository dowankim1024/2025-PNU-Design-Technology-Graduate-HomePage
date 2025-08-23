import { Routes, Route, Navigate } from "react-router-dom";
import { DesignersPage } from "@/Pages/DesignersPage";
import { DesignerDetailPage } from "@/Pages/DesignerDetail";
import { Visitor } from "@/Pages/Visitor";
import { TeamProject } from "@/Pages/TeamProject";
import { TeamSelect } from "@/Pages/TeamSelect";
import Layout from "@/components/Layout";
import AboutPage from "@/Pages/About";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/designers" element={<DesignersPage />} />
        <Route path="/designer" element={<DesignerDetailPage />} />
        <Route path="/team" element={<TeamSelect />} />
        <Route path="/team-detail" element={<TeamProject />} />
        <Route path="/visitor" element={<Visitor />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
