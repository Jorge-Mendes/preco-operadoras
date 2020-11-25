import React from "react";

const styles = {
  height: "75px"
};

function Description() {
  return (
    <div className="row row-deck row-cards">

      <div className="col-sm-4 col-lg-4">
        <div className="card">
          <div className="card-body">

            <div className="media d-flex">
              <div className="align-self-center">
                <img src="/images/operadoras/meo-logo.png" alt="meo-logo" style={styles} />
              </div>
              <div className="media-body text-right">
                <div className="h1 mb-3" id="value-meo">0.00€</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-sm-4 col-lg-4">
        <div className="card">
          <div className="card-body">

            <div className="media d-flex">
              <div className="align-self-center">
                <img src="/images/operadoras/vodafone-logo.png" alt="vodafone-logo" style={styles} />
              </div>
              <div className="media-body text-right">
                <div className="h1 mb-3" id="value-vodafone">0.00€</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-sm-4 col-lg-4">
        <div className="card">
          <div className="card-body">

            <div className="media d-flex">
              <div className="align-self-center">
                <img src="/images/operadoras/nos-logo.png" alt="nos-logo" style={styles} />
              </div>
              <div className="media-body text-right">
                <div className="h1 mb-3" id="value-nos">0.00€</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Description
