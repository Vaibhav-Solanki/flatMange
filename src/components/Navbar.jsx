import { GoHome } from "react-icons/go";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Navbar() {
  const dispatch = useDispatch();
  const handIN = async (e) => {
    try {
      let res = await axios.get(
        `https://flatback.herokuapp.com/flat/search/${e.target.value}`
      );
      dispatch({ type: "all_flat", payload: res.data.allUser });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <GoHome style={{ width: 30, height: 32 }} />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addflat" className="nav-link px-2 text-white">
                Add Flat
              </Link>
            </li>
            <li>
              <Link to="/addresident" className="nav-link px-2 text-white">
                Add Resident
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              onChange={handIN}
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Search
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatch({ type: "logout" })}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
