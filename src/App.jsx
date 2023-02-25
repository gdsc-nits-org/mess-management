import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, Notice, TimeTable } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/timetable" element={<TimeTable />} />
      </Routes>
    </>
  );
};

export default App;
