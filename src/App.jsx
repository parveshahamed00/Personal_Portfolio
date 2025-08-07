import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hr from "./pages/Hr";
import Dev from "./pages/Dev";
import Stalker from "./pages/Stalker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hr />} />
      {/* <Route path="/hr" element={<Hr />} />
      <Route path="/developer" element={<Dev />} />
      <Route path="/stalker" element={<Stalker />} /> */}
    </Routes>
  );
}

export default App;
