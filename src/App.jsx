import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, TimeTable } from "./Pages";
import { Home, Form } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/Feedback" element={<Form />} />
      </Routes>
    </>
  );
};

export default App;
