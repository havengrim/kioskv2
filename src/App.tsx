import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import './index.css';
import Announcements from "./pages/announcements";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
   
      </Routes>
    </Router>
  );
};

export default App;
