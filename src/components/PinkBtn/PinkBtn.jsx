import React from "react";
import './PinkBtn.scss'
function PinkBtn({ data,src }) {
  return <button className="pink-btn">{data} {src?<img src={src} alt="image" />:''}</button>;
}

export default PinkBtn;
