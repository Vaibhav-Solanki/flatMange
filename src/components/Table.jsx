import { useSelector } from "react-redux";
export default function Table() {
  const flat = useSelector((e) => e.res);
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
        {flat.map(({ Name, Flat, Gender, Age, _id }, key) => (
          <tr>
            <th scope="row">{key}</th>
            <td>{Name}</td>
            <td>{Flat.No}</td>
            <td>{Gender}</td>
            <td>{Age}</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
