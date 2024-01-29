import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/header/Header";

function PortfolioScreen(props) {
  const [apps, setApps] = useState([]);
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const appsResponse = await axios.get('https://portfolio-suq4.onrender.com/api/apps');
        const websitesResponse = await axios.get('https://portfolio-suq4.onrender.com/api/websites');

        setApps(appsResponse.data);
        setWebsites(websitesResponse.data);
      } catch (error) {
        console.error('Error fetching data from database:', error);
      }
    };

    fetchDataFromDB();
  }, []);

  return (
    <>
    <Header/>
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>List of my projects</h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container portifolios">
      {websites.map((website) => (
          <div className="slides row" key={website._id}>
            <div className="sliderWords col-lg-4 col-md-5">
              <div className="sliderWordsImage">
                <img src={website.image} alt="Website" />
              </div>
              <div className="sliderHeading">
                <h4>{website.name}</h4>
                <p>{website.description}</p>
              </div>
            </div>
            <div className="sliderIterms col-lg-8 col-md-7">
              <div className="sliderShow">
                <img src={website.image} alt="Website" />
                <div className="saleslebal">
                  <div
                    className="salesLebalIcon"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Details"
                  >
                    <Link to={`/websites/${website._id}`} target="_blank">
                      <i className="fas fa-sliders-h"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))};
        {apps.map((app) => (
          <div className="slides row" key={app._id}>
            <div className="sliderWords col-lg-4 col-md-5">
              <div className="sliderWordsImage">
                <img src={app.image} alt="App" />
              </div>
              <div className="sliderHeading">
                <h4>{app.name}</h4>
                <p>{app.description}</p>
              </div>
            </div>
            <div className="sliderIterms col-lg-8 col-md-7">
              <div className="sliderShow">
                <img src={app.image} alt="App" />
                <div className="saleslebal">
                  <div
                    className="salesLebalIcon"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Details"
                  >
                    <Link to={`/apps/${app._id}`} target="_blank">
                      <i className="fas fa-sliders-h"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))};        
      </div>
    </>
  );
}

export default PortfolioScreen;





