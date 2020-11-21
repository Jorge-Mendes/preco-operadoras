import React from "react";
import Chart from './Chart';

function Content() {
    return (
        <div className="my-3 my-md-5">
            <div className="container">
                <div className="row row-cards">
                    <div className="col-lg-12">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
