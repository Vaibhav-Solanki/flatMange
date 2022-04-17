import Grid from "../components/Grid";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const page = useSelector((el) => el.page);
  const dispatch = useDispatch();
  return (
    <div>
      <Grid />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
            >
              {page - 1 > 0 ? page - 1 : page}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch({ type: "page", payload: page })}
            >
              {page}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
            >
              {page + 1}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
