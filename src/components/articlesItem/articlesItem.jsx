import React from "react";
import "./articlesItem.scss";

function ArticlesItem({ id, image, color }) {
  return (
    <>
      <div className="articlesItem">
        <div className="article_img">
          <img src={image} alt="qwe" />
          <button style={{backgroundColor:color}}>STORIES</button>
        </div>
        <div className="article_text">
          <p>May 5. 2022 | 4 MIN READ</p>
          <b>How marketing can help your <br />
             business more than anything.</b>
        </div>
      </div>
    </>
  );
}

export default ArticlesItem;
