import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Grid() {
  const navigate = useNavigate();
  const flat = useSelector((e) => e.flat);
  return (
    <div className="container mt-5">
      <div className="row">
        {flat.map(({ Img, Type, No, Block, _id }) => (
          <div
            className="col-md-4"
            key={_id}
            onClick={() => navigate("/flat/" + _id)}
          >
            <div className="card p-3">
              <div className="d-flex flex-row mb-3">
                <img src={Img} width="70" />
                <div className="d-flex flex-column ml-2">
                  <span>Type</span>
                  <span className="text-black-50">{Type}</span>
                </div>
              </div>
              <h6>
                Block Name :{Block}
                <br />
                Flate No: {No}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
