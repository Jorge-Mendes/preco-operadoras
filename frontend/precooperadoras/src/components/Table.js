import React from "react";

function Table() {
    return (
        <div className="row row-cards">
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-vcenter card-table">
                    <thead>
                      <tr>
                        <th>Operadora</th>
                        <th>Plano</th>
                        <th>TV</th>
                        <th>Download/Upload (Mbps)</th>
                        <th>Voz</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Meo</td>
                          <td>M3</td>
                          <td className="text-muted">150</td>
                          <td className="text-muted">500/100</td>
                          <td className="text-muted">Chamadas incluidas para 50 destinos internacionais</td>
                        </tr>
                        <tr>
                          <td>Vodafone</td>
                          <td>FIBRA 3 Gold</td>
                          <td className="text-muted">140</td>
                          <td className="text-muted">500/100</td>
                          <td className="text-muted">Chamadas incluidas para 31 destinos internacionais</td>
                        </tr>
                        <tr>
                          <td>NOS</td>
                          <td>NOS 3</td>
                          <td className="text-muted">180</td>
                          <td className="text-muted">500/100</td>
                          <td className="text-muted">Chamadas incluidas</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Table;
