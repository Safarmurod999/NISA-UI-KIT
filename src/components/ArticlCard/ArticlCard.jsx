import React from "react";

import CardImgArticl from "../../assets/Pricing/Card1.jpg";

import "./ArticlCard.scss";

function ArticlCard() {
  return (
    <>
      <div className="articl">
      <div className="card">
        <div className="card__heade">
          <img className="card__img" src={CardImgArticl} alt={"card-img"} />
          <span className="card_btn">STORIS</span>
        </div>
        <div className="card__body">
          <span className="card__deta">May 5. 2022 | 4 MIN READ</span>
          <p className="card__paragrft">
            How marketing can help your business more than anything.
          </p>
        </div>
      </div> 
      </div>     
     </>
  );
}

export default ArticlCard;
