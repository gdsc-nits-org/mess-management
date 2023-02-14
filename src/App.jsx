import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
