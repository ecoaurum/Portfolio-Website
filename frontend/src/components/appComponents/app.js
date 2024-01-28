import React from "react";

function App(props) {
    const { app } = props;
    // console.log(props.app);
    return (
        <div className="blogBox col-lg-4 col-md-6 col-sm-6">
            <div className="blogBox_pic">
                <img src={app.image} alt={app.name} />
                <div className="blogLebal">
                    <a href={`/apps/${app._id}`}>Project Details</a>
                </div>
            </div>
            <div className="blog_text">
                <ul>
                    <li>
                        <i className="far fa-calendar">12 decembre 2023</i>
                    </li>
                </ul>
                <h5>
                    <a href={`/apps/${app._id}`}>{app.name}</a>
                </h5>
                <p>{app.description.substring(0, 90)}...</p>
            </div>
        </div>
    )   
};

export default App;