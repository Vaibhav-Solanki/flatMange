import React from "react";
export default function Table() {
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
        {[].map(({ Name, Flat, Gender, Age, _id }, key) => (
          <tr>
            <th scope="row">{key}</th>
            <td>{Name}</td>
            <td>{Flat}</td>
            <td>{Gender}</td>
            <td>{Age}</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
