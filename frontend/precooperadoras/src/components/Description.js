import React from "react";

function Description() {
    return (
        <div className="row row-deck row-cards">
            <div className="col-sm-4 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="h1 mb-3" id="value-meo">0.00€</div>
                  <div className="d-flex mb-2">
                    <div>MEO</div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="h1 mb-3" id="value-vodafone">0.00€</div>
                  <div className="d-flex mb-2">
                    <div>VODAFONE</div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="h1 mb-3" id="value-nos">0.00€</div>
                  <div className="d-flex mb-2">
                    <div>NOS</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Description
