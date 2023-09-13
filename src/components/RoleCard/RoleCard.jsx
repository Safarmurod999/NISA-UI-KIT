import React from "react";
import "./RoleCard.scss";
import { Link } from "react-router-dom";
function RoleCard({ id, src, job, name, title, color }) {
  return (
    <div className="role__card">
      <Link to={`/${name}`}>
        <div className="role__card--img">
          <img src={src} alt={src} />
          <span style={{ backgroundColor: color }}>{job}</span>
        </div>
        <div className="role__card--content">
          <h4>{name}</h4>
          <p className="text">{title}</p>
          <div className="role__card--links">
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#ffffff" }}
            ></i>
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#ffffff" }}
            ></i>
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#ffffff" }}
            ></i>
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RoleCard;
