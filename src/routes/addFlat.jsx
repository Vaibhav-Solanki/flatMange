import React from "react";
import { useState } from "react";
import axios from "axios";
export default function addFlat() {
  const [first, setfirst] = useState({});
  function handIN(e) {
    let { name, value } = e.target;
    setfirst({ ...first, [name]: value });
  }
  const onEv = async (e) => {
    try {
      let res = await axios.post("https://flatback.herokuapp.com/flat", first);
    } catch (error) {
      console.log(error);
    }
    window.alert("added success");
    // navigate("/");
  };
  return (
    <div className="container p-3">
      <div className="form-group">
        <label htmlFor="name">Block</label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="Block"
          id="name"
          aria-describedby="helpId"
          placeholder="Enter Block Name"
          onChange={handIN}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Image url</label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="Img"
          id="name"
          aria-describedby="helpId"
          placeholder="Enter Image Url"
          onChange={handIN}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Country">Type:</label>
        <select
          className="form-control"
          name="Type"
          id="Country"
          defaultValue="null"
          onChange={handIN}
        >
          <option value="null" disabled>
            Type
          </option>
          <option value="Owner">Owner</option>
          <option value="Tenant">Tenant</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Population">No</label>
        <input
          type="number"
          className="form-control form-control-sm"
          name="No"
          id="Population"
          aria-describedby="helpId"
          placeholder="Enter City Population"
          onChange={handIN}
        />
      </div>
      <button
        className="btn btn-success w-100 my-3"
        style={{ borderColor: "#ffc107", backgroundColor: "#ffc107" }}
        onClick={onEv}
      >
        Save
      </button>
    </div>
  );
}
