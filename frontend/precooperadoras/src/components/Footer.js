import React from "react";

function Footer() {
    return (
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-auto ml-lg-auto">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <a href="https://github.com/Renato-Silva/preco-operadoras" className="btn btn-outline-primary btn-sm">Código Fonte</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
                Copyright © 2020 <a href=".">Preço Operadoras</a>. Theme by <a href="https://codecalm.net" target="_blank">codecalm.net</a> All rights reserved.
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
