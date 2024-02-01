import { Routes, Route } from "react-router-dom";

import Cong from "./Cong";
import Home from "./Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/congratulations" element={<Cong />} />
    </Routes>
  );
}

export default Router;
