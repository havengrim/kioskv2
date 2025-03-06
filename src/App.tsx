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
import ChatBotHead from "./components/ChatBotHead";
import Gallery from "./pages/Gallery";
import KioskDashboard from "./KioskDashboard";
import ScrollToTopButton from "./components/ui/GoToTop";
import Calendar from "./pages/Calendar";
import Info from "./pages/Info";
import Feedback from "./pages/Feedback";
import FeedbackDialog from "./components/FeedbackDialog";
import { Toaster } from "sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="dark:bg-gray-900 bg-white">
      <Toaster position="top-right" richColors />
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<KioskDashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/info" element={<Info />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/barometer" element={<FeedbackDialog />} />
          </Routes>
        </Router>
        <ChatBotHead />
        <ScrollToTopButton />
      </div>
      </ThemeProvider>
  );
};

export default App;
