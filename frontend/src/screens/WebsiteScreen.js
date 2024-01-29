import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import RecentWeb from "../components/recentsComponents/RecentWeb";
import axios from 'axios';

function WebsiteScreen(props) {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const response = await axios.get('https://portfolio-suq4.onrender.com/api/websites');
        setWebsites(response.data);
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
            <h1>My Recent Websites</h1>
            <button>
              <a href="/">Home</a>
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="blogs">
        <div className="article">
          <div className="rows">
            {websites.slice(0, 3).map((website) => (
              <RecentWeb key={website._id} website={website} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsiteScreen;

