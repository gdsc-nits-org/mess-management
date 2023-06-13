import { Routes, Route } from "react-router-dom";
import { Header, Navbar } from "./Components";
import { Home, TimeTable, Notice, Feedback } from "./Pages";
import useMediaQuery from "./Hooks/useMediaQuery";
import "./index.scss";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 940px)");
  return (
    <div className="main-container">
      <Navbar isMobile={isMobile} />
      <div className="sub-container">
        <Header isMobile={isMobile} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
