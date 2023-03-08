import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";

import { Home, TimeTable, Notice, Feedback } from "./Pages";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;
