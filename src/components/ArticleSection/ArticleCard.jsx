import React from "react";

function ArticleCard({ img, color, date, text, duration }) {
  return (
    <li className="article-section-card">
      <div className="article-section-card-img">
        <img src={img} alt="image" />
        <span
          className="article-section-card-status"
          style={{ backgroundColor: color }}
        >
          Stories
        </span>
      </div>

      <div className="article-section-card-content">
        <p>{date} | {duration}</p>
        <h6>{text}</h6>
      </div>
    </li>
  );
}

export default ArticleCard;
