import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ExperiencePage from "./pages/Experience";
import ExperienceDetailPage from "./pages/ExperienceDetail";

import "./assets/styles/Experience.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ExperiencePage />} />
          <Route path="/experience/:id" element={<ExperienceDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
