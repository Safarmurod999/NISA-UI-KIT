import React from "react";
import './PinkBtn.scss'
function PinkBtn({ data,src }) {
  return <button className="pink-btn">{data} <img src={src} alt="image" /></button>;
}

export default PinkBtn;
