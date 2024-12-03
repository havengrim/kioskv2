import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import './index.css';
import Announcements from "./pages/announcements";
import Hrppms from "./pages/hrppms";
import Lds from "./pages/lds";
import Hrws from "./pages/hrws";
import Pas from "./pages/pas";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/hrppms" element={<Hrppms />} />
        <Route path="/lds" element={<Lds />} />
        <Route path="/hrws" element={<Hrws />} />
        <Route path="/pas" element={<Pas />} />
      </Routes>
    </Router>
  );
};

export default App;
