import React from "react";
import "./Home.scss";
import arrowright from "../../assets/Home/arrow-right.svg";
import homeright from "../../assets/Home/home-right.png";
import discover from "../../assets/Home/discover.png";
import user from "../../assets/Home/user.png";
import twitch from "../../assets/Home/twitch.svg";
import freedom from "../../assets/Home/freedom.png";
import message from "../../assets/Home/message-btn.svg";
import layer from "../../assets/Home/layer-btn.svg";
import play from "../../assets/Home/play-btn.svg";
import designers from "../../assets/Home/designers.png";
import {PinkBtn,BlueBtn,CustomersCarousel,ContactUs,ArticleSection,Footer} from "../../components/index";
import partners from "../../assets/Home/partners-bg.png";
import discover_tablet from "../../assets/Home/discover-tablet.png";
import freedom_tablet from "../../assets/Home/freedom-tablet.png";
function Home({ data }) {
  return (
    <>
      <section className="home">
        <div className="container container-flex">
          <div className="home__left">
            <h1>Nisa boosts team product excellence</h1>

            <p>
              Nisa is constantly improving to move forward through dashboard,
              statistics, data and verify and superior human resources.
            </p>

            <PinkBtn data={"Get Started"} src={arrowright} />
          </div>
          <div className="home__right">
            <img src={homeright} alt="homeright" />
          </div>
        </div>
      </section>
      <section className="discover">
        <div className="container container-flex">
          <div className="discover__left">
            <img src={discover} alt="discover" />
            <img
              src={discover_tablet}
              alt="discover"
              className="discover__left__tablet"
            />
          </div>
          <div className="discover__right">
            <div className="discover__right__title title">
              Discover the power of creative freedom with Nisa.
            </div>
            <p className="discover__right__text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </p>
            <BlueBtn data={"Explore Section"} />
            <h6>Add some additional details about your product</h6>
            <div className="user-div">
              <img src={user} alt="user" />
              <div className="user-div-text">
                <p>Motiur Leeman</p>
                <span>Markating Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container container-flex">
          <div className="features__left">
            <div className="features__left__title title">
              Share the features that help your customers
            </div>
            <p className="features__left__text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui. Cursus facilisis diam
              turpis leo netus consequat phasellus. Netus ipsum sed faucibus
              enim.
            </p>
            <BlueBtn data={"Explore Section"} />
          </div>
          <div className="features__right">
            <div className="features__card">
              <img src={twitch} alt="twitch" />
              <div>Blog</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="features__card">
              <img src={twitch} alt="twitch" />
              <div>Documentation</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="features__card">
              <img src={twitch} alt="twitch" />
              <div>Integrations</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="features__card">
              <img src={twitch} alt="twitch" />
              <div>Customers</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="freedom">
        <div className="container container-flex">
          <div className="freedom__left">
            <img src={freedom} alt="freedom" />
            <img
              src={freedom_tablet}
              alt="freedom"
              className="freedom__tablet"
            />
          </div>
          <div className="freedom__right">
            <div className="freedom__right__title title">
              Discover the power of creative freedom with Nisa.
            </div>
            <p className="freedom__right__text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.{" "}
            </p>
            <div className="freedom__right__btn">
              <BlueBtn data={"Explore Section"} />
              <PinkBtn data={"Get Started"} src={play} />
            </div>
            <div className="freedom__right__cards">
              <div className="card">
                <img src={message} alt="message" />
                <p>Built to be customise with complete ease.</p>
              </div>
              <div className="card">
                <img src={layer} alt="layer" />
                <p>All the pages you need to go live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="designers">
        <div className="container">
          <div className="designers__left">
            <div className="designers__left__title title">
              Discover the power of creative freedom with Nisa.
            </div>
            <p className="designers__left__text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.{" "}
            </p>
            <BlueBtn data={"Explore Section"} />
          </div>
          <div className="designers__right">
            <img src={designers} alt="designers" />
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <div className="partners__title">
            Put the spotlight on the main features
          </div>
          <div className="partners__img">
            <img src={partners} alt="partners" />
          </div>
          <div className="partners__list">
            {data.map((el) => {
              return <img key={el.id} src={el.img} alt="asdad" />;
            })}
          </div>
        </div>
      </section>
      <section className="customers">
        <div className="container">
          <div className="title customers__title">
          Customers love the ease and simplicity
          </div>
        </div>
        <CustomersCarousel />
      </section>
      <section className="contact">
        <ContactUs/>
      </section>
      <section className="article">
        <ArticleSection/>
      </section>
    </>
  );
}

export default Home;
