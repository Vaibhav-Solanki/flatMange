export default function Grid() {
  return (
    <div className="container mt-5">
      <div className="row">
        {[].map(({ Img, Type, No, Block, Resident }) => (
          <div className="col-md-4">
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
