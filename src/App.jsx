import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";

import { Home, TimeTable, Feedback } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;
