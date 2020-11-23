import React from "react";

function Table() {
    return (
        <br>
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
                          <td><a href="https://www.meo.pt/servicos/casa/fibra/pacotes-tv-net-voz" target="_blank">M3</a></td>
                          <td className="text-muted">150</td>
                          <td className="text-muted">500/100</td>
                          <td className="text-muted">Chamadas incluidas para 50 destinos internacionais</td>
                        </tr>
                        <tr>
                          <td>Vodafone</td>
                          <td><a href="https://www.vodafone.pt/pacotes.html#3p" target="_blank">FIBRA 3 Gold</a></td>
                          <td className="text-muted">140</td>
                          <td className="text-muted">500/100</td>
                          <td className="text-muted">Chamadas incluidas para 31 destinos internacionais</td>
                        </tr>
                        <tr>
                          <td>NOS</td>
                          <td><a href="https://www.nos.pt/particulares/pacotes/todos-os-pacotes/Paginas/pacotes.aspx" target="_blank">NOS 3</a></td>
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
