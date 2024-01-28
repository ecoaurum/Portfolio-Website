import React from 'react';
import { Link } from 'react-router-dom';

function RecentWeb(props) {
  const { website } = props;

  return (
    <div className="shop col-lg-3 col-md-4 col-sm-6">
      <div className="shopBack">
        <img src={website.image} alt={website.name} />
        <div className="shoplebal">
          <Link to={`/websites/${website._id}`}>Read More</Link>
        </div>
      </div>
      <div className="shoptext">
        <p>{website.name}</p>
        <h3>{website.description.substring(0, 50)}...</h3>
      </div>
    </div>
  );
}

export default RecentWeb;
