import React from "react";
import "./Blog.scss";

import SecondBtn from "../../components/SecondBdn";

import PricingCard from "../../components/BlogCard";
import ArticlCard from "../../components/ArticlCard";
import Button from "../../components/Button";

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
          <div className="form__box">
              <div className="form__description">
                  <h2>Discover the power of creative freedom with Align.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </p>
              </div>

              <form action="">
                <input placeholder="Your Name"/>
                <input placeholder="Email Addres"/>
                <div className="btn-box"><Button title="Submit" variant="degree"/></div>
              </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
