import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, Notice } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </>
  );
};

export default App;
