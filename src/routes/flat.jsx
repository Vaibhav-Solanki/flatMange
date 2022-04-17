import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table";
export default function Flat() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFlate();
  }, []);
  const { id } = useParams();
  console.log(id);
  const getFlate = async () => {
    try {
      let res_ = await axios.get(`https://flatback.herokuapp.com/flat/${id}`);
      dispatch({ type: "all_res", payload: res_.data.allUser });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }} className="my-3">
        All residents of Flat No :3
      </h2>
      <Table />
    </div>
  );
}
