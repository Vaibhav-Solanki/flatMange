import { useParams } from "react-router-dom";
export default function Flat() {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
}
