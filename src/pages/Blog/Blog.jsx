import React from "react";
import "./Blog.scss";

import SecondBtn from "../../components/SecondBdn";

import PricingCard from "../../components/BlogCard";
import ArticlCard from "../../components/ArticlCard";
import Form from "../../components/Form";


function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container">
          <SecondBtn />
          <h2 className="blog__title">Our latest articles</h2>

          <div className="blog__list">
            <PricingCard />
            <PricingCard />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SecondBtn/>
          <h2 className="blog__title">Take a look at the lastest aricles</h2>
          <div className="articl-list">
           <ArticlCard/>
           <ArticlCard/>
           <ArticlCard/>
           <ArticlCard/>
           <ArticlCard/>
           <ArticlCard/>
          </div>
        </div>
      </section>


      <section className="form">
        <div className="container">
          <Form/>
        </div>
      </section>
    </>
  );
}

export default Blog;
