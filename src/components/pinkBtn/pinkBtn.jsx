import React from "react";
import './Pinkbtn.scss'
function Pinkbtn({ data,src }) {
  return <button className="pink-btn">{data} <img src={src} alt="image" /></button>;
}

export default Pinkbtn;
