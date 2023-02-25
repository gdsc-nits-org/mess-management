import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, Nutrients } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutrients" element={<Nutrients />} />
      </Routes>
    </>
  );
};

export default App;
