import React from "react";

function PortfolioApps(props) {
    const {app} = props;
    return (
        <div className="sliderShow">
                    <img src={app.image} alt={app.name} />
                    <div className="saleslebal">
                    {/* <div
                        className="salesLebalIcon"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Details"
                    >
                        <a href="">
                        <i className="fas fa-sliders-h"></i>
                        </a>
                    </div> */}
                    <div
                        className="salesLebalIcon"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Live Preview"
                    >
                        <a href={`/apps/${app.id}`}>
                        <i className="fas fa-laptop"></i>
                        </a>
                    </div>
                    </div>
                </div>
    );
};

export default PortfolioApps;