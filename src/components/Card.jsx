// src/components/Card.js
import React from 'react';
import '../scss/card.scss';


const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
      {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
