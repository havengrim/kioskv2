import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import "./index.css";
import Announcements from "./pages/announcements";
import Hrppms from "./pages/hrppms";
import Lds from "./pages/lds";
import Hrws from "./pages/hrws";
import Pas from "./pages/pas";
import About from "./pages/about";
import { ThemeProvider } from "@/components/theme-provider"
import Settings from "./pages/settings";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/hrppms" element={<Hrppms />} />
          <Route path="/lds" element={<Lds />} />
          <Route path="/hrws" element={<Hrws />} />
          <Route path="/pas" element={<Pas />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      </ThemeProvider>
  );
};

export default App;
