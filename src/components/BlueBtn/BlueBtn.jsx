import React from "react";
import "./BlueBtn.scss";
function BlueBtn({ data, style, type }) {
  return (
    <button type={type} className="blueBtn" style={style}>
      {data}
    </button>
  );
}

export default BlueBtn;
