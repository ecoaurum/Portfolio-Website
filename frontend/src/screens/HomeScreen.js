import React, { useEffect, useState } from "react";
import { Tab, Tabs} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../components/header/Header";
import Services from "../ServicesData"
import { HomeService, HomeIndustry } from "../components/servicesComponents/serviceComponents";
import ContactComponent from "../components/contactComponent/ContactComponent";
// import AppsData from "../data/AppData";
import RecentWeb from "../components/recentsComponents/RecentWeb";
import RecentApp from "../components/recentsComponents/RecentApp";
import axios from 'axios';

function HomeScreen(props) {
    const [websites, setWebsites] = useState([]);
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchDataFromDB = async () => {
        try {
            const websitesResponse = await axios.get('https://portfolio-suq4.onrender.com/api/websites');
            setWebsites(websitesResponse.data);

            const appsResponse = await axios.get('https://portfolio-suq4.onrender.com/api/apps');
            setApps(appsResponse.data);
        } catch (error) {
            console.error('Error fetching data from database:', error);
        }
        };

        fetchDataFromDB();
    }, []);
    return (
        <>
            {/* Header */}
            <Header bgColor="black" />
            {/* Home Screen */}
            <div className="Mainbackground" id="home">
            <div className="topBackground"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                fill="#001517"
                fillopacity="1"
                d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
            </svg>

            <div className="container fluids">
                <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="screenWords">
                    <h1>Hello, I'm Alexander</h1>
                    <p>
                    I am a backend developer. My specialization lies in building applications and websites where I excel at combining backend functionalities with foundation in frontend. Feel free to take a look at my latest projects. Remotely available UTC−1 to UTC+8. 
                    <div style={{ display: 'flex', gap: '20px' }}>
                    My contacts:
                        <a href="mailto:aleksander.sakaly@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
                        <Link to="https://t.me/ecoaurum" target="_blank" rel="noopener noreferrer">telegram</Link>
                    </div>
                    </p>
                    <div className="twoMainButton">
                        <div className="buttonMain">
                        <Link to="/apps">Javascript</Link>
                        <div className="hrizontalLine"></div>
                        </div>
                        <div className="buttonMain">
                        <Link to="/websites">Websites</Link>
                        <div className="hrizontalLine diff"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="screenImage">
                    <img src="/images/it.png" alt="irene blog" />
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Services */}
            <div className="section" id="services">
            <div className="container rows">
                <Tabs defaultActiveKey="services" className="tab">
                <Tab className="tablinks" eventKey="services" title="services">
                <div className="container rows">
                    <div className="tabcontent" id="London">
                    <div className="row">                    
                        { Services.services.map((service) => (
                            <HomeService key={service.id} service={service} />
                        ))}
                    </div>
                    </div>
                </div>
                </Tab>
                <Tab className="tablinks" eventKey="technology" title="technology">
                    <div className="container rows">
                    <div className="tabcontent" id="London">
                        <div className="row">   
                            {Services.Technology.map((technology) => (
                                <div className="col-lg-4 col-md-4 col-sm-6" key={technology.id}>
                                    <div className="sectionBox">
                                    <div className="sectionImage">
                                        <img src={technology.image} alt={technology.title} />
                                    </div>
                                    <div className="sectionWords">
                                        <h4>{technology.name} {technology.title}</h4>
                                        <ul>
                                            {technology.techs.map((oneTech) => (
                                                <li key={oneTech.id}>{oneTech.name}</li>
                                            ))};                                        
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            ))};                   
                        </div>
                    </div>
                    </div>
                </Tab>
                <Tab className="tablinks" eventKey="industry" title="industry">
                    <div className="container rows">
                    <div className="tabcontent" id="London">
                        <div className="row">                           
                            { Services.Industry.map((industry) => (
                                <HomeIndustry key={industry.id} industry={industry} />
                            )) } 
                        </div>
                    </div>
                    </div>
                </Tab>
                </Tabs>
            </div>         
            </div>
            {/* About */}
            <section id="about">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="aboutMeImg">
                        <img src="/images/gifs/about.png" alt="about me" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-me">
                        <h5>About me</h5>
                        <div className="aboutHorizontalLine"></div>
                        <p>
                            I enjoy to delivering high-performance backend solutions that meet the demands of modern web development.
                            My expertise lies in using technologies such as JavaScript and TypeScript.
                        </p>
                        <p>
                            Possessing high level backend programming skills, such as NodeJS, ExpressJS and NestJS, SQL and NoSQL DBs, I excel in building APIs and implementing backend components.                            
                        </p>
                        <p>
                            Understanding of data structures, algorithms, and proficiency in data migration, transformation, and analysis. Client Side coding skills in React and Angular.
                        </p>
                        <p>
                            My communication skills in Ukrainian, Russian and English, ensuring effective collaboration and clear understanding across diverse teams.
                        </p>                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Contact */}
            <div className="contactme" id="contact">
            <div className="contactOverlay">
                <div className="container">
                <div className="form">
                    <ContactComponent />
                </div>
                </div>
            </div>
            </div>
            {/* Recent Work */}
            <div className="container" id="blogs">
            <div className="article">
                <h2>Recent Works</h2>
                <hr />
                <div className="rows">
                    {websites.slice(0, 2).map((website) => (
                        <RecentWeb key={website.id} website={website} />
                    ))}

                    {apps.slice(0, 2).map((app) => (
                        <RecentApp key={app.id} app={app} />
                    ))}
                
                </div>
            </div>
            </div>
        </>
    );
};

export default HomeScreen;