import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
export default function login() {
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    username: "vaibhav",
    password: "87654321",
  });
  function handIN(e) {
    let { name, value } = e.target.value;
    setuser({ ...user, [name]: value });
  }
  const postLog = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://flatback.herokuapp.com/login", user);
      let { token } = res.data;
      dispatch({ type: "login", payload: token });
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <section
      className="vh-100 gradient-custom"
      style={{ background: "#212529" }}
    >
      <div className="container py-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      name="username"
                      className="form-control form-control-lg"
                      value="vaibhav"
                      onChange={handIN}
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Username
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      name="password"
                      className="form-control form-control-lg"
                      value="87654321"
                      onChange={handIN}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    onClick={postLog}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
