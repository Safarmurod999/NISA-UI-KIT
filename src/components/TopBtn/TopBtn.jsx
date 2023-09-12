import React from 'react'
import "./TopBtn.scss";
function TopBtn({style,text}) {
  return (
    <button className={`top-btn ${style}`}>{text}</button>
  )
}

export default TopBtn
