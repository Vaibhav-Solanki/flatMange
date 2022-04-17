import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./routes/Home";
import Flat from "./routes/flat";
import Resident from "./routes/resident";
import AddFlat from "./routes/addFlat";
import AddResident from "./routes/addResident";
import Navbar from "./components/Navbar";
import Login from "./routes/login";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const navigat = useNavigate();
  const user = useSelector((el) => el.user.state);
  const page = useSelector((el) => el.page);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    getFlate();
  }, [page]);
  const getFlate = async () => {
    try {
      let res = await axios.get(
        `https://flatback.herokuapp.com/flat?page=${page}`
      );
      dispatch({ type: "all_flat", payload: res.data.allUser });
      let res_ = await axios.get("https://flatback.herokuapp.com/res");
      dispatch({ type: "all_res", payload: res_.data.allUser });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user ? <Navbar /> : ""}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/flat/:id" element={user ? <Flat /> : <Login />} />
        <Route path="/resident" element={user ? <Resident /> : <Login />} />
        <Route
          path="/addresident"
          element={user ? <AddResident /> : <Login />}
        />
        <Route path="/addflat" element={user ? <AddFlat /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
