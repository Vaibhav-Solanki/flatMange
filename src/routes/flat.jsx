import { useParams } from "react-router-dom";
import Table from "../components/Table";
export default function Flat() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }} className="my-3">
        All residents of Flat No :3
      </h2>
      <Table />
    </div>
  );
}
