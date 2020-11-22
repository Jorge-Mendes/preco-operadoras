import React from "react";

function Header() {
    return (
        <div className="header py-4">
            <div className="container">
                <div className="d-flex">
                <a className="header-brand" href="https://preco-operadoras.pt/">
                  <img src="/images/logo.svg" className="header-brand-img" alt="tabler logo"/>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
