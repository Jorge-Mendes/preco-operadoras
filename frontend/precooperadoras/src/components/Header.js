import React from "react";

function Header() {
    return (
        <div className="header py-4">
            <div className="container">
                <div className="d-flex">
                <a className="header-brand" href="./index.html">
                  <img src="https://preview.tabler.io/static/logo.svg" className="header-brand-img" alt="tabler logo"/>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
