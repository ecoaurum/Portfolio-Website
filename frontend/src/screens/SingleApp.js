import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import AppDetails from './AppDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleApp(props) {
  const { id } = useParams();
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const response = await axios.get(`/api/apps/${id}`);
        setSelectedApp(response.data);
      } catch (error) {
        console.error('Error fetching app details from database:', error);
      }
    };

    fetchDataFromDB();
  }, [id]);

  return (
    <>
      <Header />
      <div className="banner" id="home">
        <div className="overlay">
          <div className="container">
            {selectedApp && <AppDetails key={selectedApp._id} app={selectedApp} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleApp;


