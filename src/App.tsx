import { DesignerCard } from "./components/DesignerCard";
import { Header } from "./components/Header";
import { DesignersPage } from "./Pages/DesignersPage";
import { DesignerDetailPage } from "./Pages/DesignerDetail";
import { TeamProject } from "./Pages/TeamProject";
import { TeamSelect } from "./Pages/TeamSelect";
import { TeamInfoData } from "./mockData/mock";

function App() {
  return (
    <>
      <TeamSelect
        teamName={TeamInfoData.teamName}
        teammates={Object.values(TeamInfoData.teammates)}
        concept={TeamInfoData.concept}
      />
    </>
  );
}

export default App;
