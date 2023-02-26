import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";

import { Home, Feedback } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;
