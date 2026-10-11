import React from "react";
import "./Card.css";

const Card = ({ title, image, subtitle }) => {
  return (
    <div className="card">
      <div className="card-content-wrap">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {image && (
        <div className="hoverimage">
          <img src={image} alt={title || "card preview"} />
        </div>
      )}
    </div>
  );
};

export default Card;