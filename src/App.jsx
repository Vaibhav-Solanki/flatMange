import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Flat from "./routes/flat";
import Resident from "./routes/resident";
import AddFlat from "./routes/addFlat";
import AddResident from "./routes/addResident";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flat/:id" element={<Flat />} />
        <Route path="/resident" element={<Resident />} />
        <Route path="/addresident" element={<AddResident />} />
        <Route path="/addflat" element={<AddFlat />} />
      </Routes>
    </>
  );
}

export default App;
