import { Router, Route } from "react-router-dom";

import { Navbar } from "./Components";
import { Home } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </>
  );
};

export default App;
