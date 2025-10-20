import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "@/components/common/ScrollToTop";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <ScrollToTop />
        <AppRoutes />
      </HashRouter>
    </>
  );
}

export default App;
