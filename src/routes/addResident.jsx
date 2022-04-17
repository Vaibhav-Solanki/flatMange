import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export default function addResident() {
  const flat = useSelector((e) => e.flat);
  const [first, setfirst] = useState({});
  function handIN(e) {
    let { name, value } = e.target;
    setfirst({ ...first, [name]: value });
  }
  const onEv = async (e) => {
    try {
      let res = await axios.post("https://flatback.herokuapp.com/res", first);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    window.alert("added success");
    // navigate("/");
  };
  return (
    <div className="container p-3">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="Name"
          id="name"
          aria-describedby="helpId"
          placeholder="Enter Name"
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
        <label htmlFor="Country">Gender</label>
        <select
          className="form-control"
          name="Gender"
          id="Country"
          defaultValue="null"
          onChange={handIN}
        >
          <option value="null" disabled>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Country">Flate</label>
        <select
          className="form-control"
          name="flat"
          id="Country"
          defaultValue="null"
          onChange={handIN}
        >
          <option value="null" disabled>
            flat no
          </option>
          {flat.map(({ _id, No }) => (
            <option value={_id} key={_id}>
              {No}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Population">Age</label>
        <input
          type="number"
          className="form-control form-control-sm"
          name="Age"
          id="Population"
          aria-describedby="helpId"
          placeholder="Enter Age"
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
