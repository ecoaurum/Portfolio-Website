import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import WebsitesDetail from './WebsiteDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleWebsite(props) {
  const { id } = useParams();
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const response = await axios.get(`/api/websites/${id}`);
        setSelectedWebsite(response.data);
      } catch (error) {
        console.error('Error fetching website details from database:', error);
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
            {selectedWebsite && <WebsitesDetail key={selectedWebsite._id} website={selectedWebsite} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleWebsite;

