import { useSelector } from "react-redux";
import axios from "axios";
export default function Table() {
  const flat = useSelector((e) => e.res);
  const Delete = async (e) => {
    const id = e.target.id;
    try {
      let res = await axios.delete(`https://flatback.herokuapp.com/res/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Flat</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {flat.map(({ Name, flat, Gender, Age, _id }, key) => {
          if (flat) var { No } = flat;
          return (
            <tr key={_id}>
              <th scope="row">{key}</th>
              <td>{Name}</td>
              <td>{No ? No : "null"}</td>
              <td>{Gender}</td>
              <td>{Age}</td>
              <td onClick={Delete} id={_id}>
                Delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
