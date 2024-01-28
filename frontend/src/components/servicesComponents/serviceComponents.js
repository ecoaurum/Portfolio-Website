import React from "react";

export const HomeService = (props) => {
    const { service } = props;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="sectionBox">
                <div className="sectionImage">
                <img
                    src={service.image}
                    alt={service.title}
                />
                </div>
                <div className="sectionWords">
                <h4>{service.title}</h4>
                <p>
                {service.description}
                </p>
                </div>
            </div>
        </div>
    );
};

export const HomeIndustry = (props) => {
    const { industry } = props;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="sectionBox">
                <div className="sectionImage">
                <img
                    src={industry.image}
                    alt={industry.title}
                />
                </div>
                <div className="sectionWords">
                <h4>{industry.title}</h4>
                <p>
                {industry.description}
                </p>
                </div>
            </div>
        </div>
    );
};