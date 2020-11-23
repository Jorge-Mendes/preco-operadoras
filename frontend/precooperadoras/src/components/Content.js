import React from "react";
import Chart from './Chart';
import Description from './Description';
import Table from './Table';

function Content() {
    return (
        <div>
            <div className="my-3 my-md-5">
                <div className="container">
                    <Description />
                    <div className="row row-cards">
                        <div className="col-lg-12">
                            <Chart />
                        </div>
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Content;
