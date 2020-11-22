import React from "react";
import Chart from './Chart';
import Metric from './Metric';

function Content() {
    return (
        <div>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="row row-cards">
                        <div className="col-lg-12">
                            <Chart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
