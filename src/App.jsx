import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Flat from "./routes/flat";
import Resident from "./routes/resident";
import AddFlat from "./routes/addFlat";
import AddResident from "./routes/addResident";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFlate();
  }, []);

  const getFlate = async () => {
    try {
      let res = await axios.get("https://flatback.herokuapp.com/flat");
      dispatch({ type: "all_flat", payload: res.data.allUser });
    } catch (error) {
      console.log(error);
    }
  };
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
