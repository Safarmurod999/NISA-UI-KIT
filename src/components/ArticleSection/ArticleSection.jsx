import React from "react";
import "./ArticleSection.scss";
import { articleData } from "./ArticleData";
import ArticleCard from "./ArticleCard";
function ArticleSection() {
  return (
    <section className="article-section">
      <div className="container">
        <div className="article-section-type">BLOG & ARTICLE</div>
        <div className="title">Take a look at the lastest articles</div>
        <ul className="article-section-list">
        {articleData.map((el) => {
              return <ArticleCard key={el.id} {...el}/>;
            })}
        </ul>
      </div>
    </section>
  );
}

export default ArticleSection;
