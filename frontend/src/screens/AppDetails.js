import React from "react";
import { Link } from 'react-router-dom';

function AppsDetail(props) {
    const { app } = props;    
    if (!app) {
        return <div>Loading...</div>;
    }  
    return (
        <>                    
            <div className="banner" id="home">
                <div className="overlay">
                    <div className="container">
                        <h1>{app.name}</h1>
                        <p>{app.description}</p>
                        <div className="button-container">
                            <button>
                                <Link target="blank" to={app.projectLink} rel="noreferrer">
                                    Project Link
                                </Link>                            
                            </button>
                            <button>
                                <Link target="blank" to={app.githubLink} rel="noreferrer">
                                    GitHub Link
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>                        
            
            <div className="container">
                <div className="screens">
                    <div className="row">
                        {app.imageTitle.map((appdetails) => (
                            <div className="row">
                            <div  key={appdetails.id}>
                                <div className="screensBox">
                                <h4>{appdetails.title}</h4>                                    
                                    <div className="row">
                                        <div className="col d-flex justify-content-center">
                                            <div className="screensImage">
                                                <p className="description-text" >
                                                    <img 
                                                        src={appdetails.image} 
                                                        alt={appdetails.title} 
                                                        style={{ border: '3px solid #ccc', borderRadius: '25px' }} 
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="screensImage">
                                                <p 
                                                    className="description-text" 
                                                    dangerouslySetInnerHTML={{ __html: appdetails.description }} 
                                                />
                                            </div>
                                        </div>                                        
                                    </div>                                    
                                </div>                                
                            </div>                            
                        </div>                        
                        ))}                        
                    </div>                    
                </div>
                <div className="button-container">
                    <button>
                        <Link to={'/portfolio'}>
                            BACK TO PORTFOLIO PROJECTS
                        </Link>                            
                    </button>                   
                </div>
            </div>                            
       </>       
    );
};

export default AppsDetail;
