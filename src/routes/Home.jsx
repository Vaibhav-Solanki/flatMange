import Grid from "../components/Grid";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const page = useSelector((el) => el.page);
  const dispatch = useDispatch();
  return (
    <div>
      <Grid />
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              onClick={() => dispatch({ type: "page", payload: page - 1 })}
            >
              {page - 1 > 0 ? page - 1 : page}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              onClick={() => dispatch({ type: "page", payload: page })}
            >
              {page}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              onClick={() => dispatch({ type: "page", payload: page + 1 })}
            >
              {page + 1}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
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
