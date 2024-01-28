import React from 'react';
import { Link } from 'react-router-dom';

function WebsitesDetail(props) {
    const { website } = props;      
    return (
       <>
            <div className="banner" id="home">
                <div className="overlay">
                    <div className="container">
                        <h1>{website.name}</h1>
                        <p>{website.description}</p>
                        <div className="button-container">
                            <button>
                                <Link target="blank" to={website.projectLink} rel="noreferrer">
                                    Project Link
                                </Link>                            
                            </button>
                            <button>
                                <Link target="blank" to={website.githubLink} rel="noreferrer">
                                    GitHub Link
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>                        
            </div>
            {/* website detail image */}
            <div className="container">
                <div className="screens">
                    <div className="row">
                        {website.imageTitle.map((websitedetails) => (                          
                            <div className="row">
                                <div  key={websitedetails.id}>
                                    <div className="screensBox">
                                    <h4>{websitedetails.title}</h4>                                    
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">
                                                <div className="screensImage">
                                                    <p className="description-text" >
                                                        <img 
                                                            src={websitedetails.image} 
                                                            alt={websitedetails.title} 
                                                            style={{ border: '3px solid #ccc', borderRadius: '25px' }} 
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="screensImage">
                                                    <p 
                                                        className="description-text" 
                                                        dangerouslySetInnerHTML={{ __html: websitedetails.description }} 
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
            </div>    
        </>      
    );
};

export default WebsitesDetail;
