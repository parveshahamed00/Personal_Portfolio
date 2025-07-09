import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hr from "./pages/Hr";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hr" element={<Hr/>}/>
    </Routes>
  );
}

export default App;
