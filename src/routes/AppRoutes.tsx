import { Routes, Route, Navigate } from "react-router-dom";
import { DesignersPage } from "@/Pages/DesignersPage";
import { DesignerDetailPage } from "@/Pages/DesignerDetail";
import { Visitor } from "@/Pages/Visitor";
import { TeamProject } from "@/Pages/TeamProject";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/designers" replace />} />
      <Route path="/designers" element={<DesignersPage />} />
      <Route path="/designer" element={<DesignerDetailPage />} />
      <Route path="/team" element={<TeamProject />} />
      <Route path="/visitor" element={<Visitor />} />
    </Routes>
  );
};

export default AppRoutes;
