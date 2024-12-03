import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import './index.css';
import Announcements from "./pages/announcements";
import Hrppms from "./pages/hrppms";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/hrppms" element={<Hrppms />} />
      </Routes>
    </Router>
  );
};

export default App;
