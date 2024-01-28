import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import RecentApp from "../components/recentsComponents/RecentApp";
import axios from 'axios';

function AppScreen(props) {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const response = await axios.get('/api/apps');
        setApps(response.data);
      } catch (error) {
        console.error('Error fetching data from database:', error);
      }
    };

    fetchDataFromDB();
  }, []);

  return (
    <>
      <Header bgColor="black" />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Projects in Pure Javascript</h1>
            <button>
              <a href="/">Home</a>
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="blogs">
        <div className="article">
          <div className="rows">
            {apps.slice(0, 3).map((app) => (
              <RecentApp key={app._id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AppScreen;


