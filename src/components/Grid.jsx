export default function Grid() {
  return (
    <div class="container mt-5">
      <div class="row">
        {[].map(({ Img, Type, No, Block, Resident }) => (
          <div class="col-md-4">
            <div class="card p-3">
              <div class="d-flex flex-row mb-3">
                <img src={Img} width="70" />
                <div class="d-flex flex-column ml-2">
                  <span>Type</span>
                  <span class="text-black-50">{Type}</span>
                </div>
              </div>
              <h6>
                Block Name :{Block}
                <br />
                Flate No: {No}
              </h6>
              <div class="d-flex justify-content-between install mt-3">
                <span>NResidents: {Resident}</span>
                <span class="text-primary">
                  View&nbsp;<i class="fa fa-angle-right"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
