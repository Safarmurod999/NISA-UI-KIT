import React from "react";
import { skillsArray } from "../../pages/About/data";
import { Link, useParams } from "react-router-dom";
import "./AboutPage.scss";
function AboutPage() {
  let { name } = useParams();
  
  return (
    <section>
      <div className="container">
        {skillsArray.map((skill) => {
          if (skill.name == name) {
            return (
              <div key={skill.id} className="about__card">
                <div className="about__card--img">
                  <Link to={'/about'}><img src={skill.src} alt={skill.src} /></Link>
                </div>
                <div className="about__card--content">
                  <div>
                    <h4>{skill.name}</h4>
                    <span>{skill.job}</span>
                  </div>
                  <div className="about__card--links">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
                <p className="about__card--info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Velit, aliquet volutpat faucibus curabitur. Lobortis quis vel
                  aenean pellentesque scelerisque neque. Nunc amet tortor eu
                  odio id semper scelerisque tristique felis. Enim, eu ultricies
                  amet vestibulum aliquam egestas. Odio nec dolor, enim euismod
                  posuere sed ante lobortis. Ac id hac molestie in tellus ut
                  aliquam. Euismod enim magna pharetra vehicula eros et a. Eget
                  ac consectetur neque ridiculus nibh et proin et est.
                </p>
                <p className="about__card--info">
                  Id id bibendum quis nam habitant enim. Arcu blandit cursus sit
                  ultrices aliquet. Non egestas blandit nibh sagittis a, sapien
                  nec hendrerit nec. Sit lacinia commodo egestas curabitur vel
                  tortor nisl phasellus interdum. Ac tempor viverra a porttitor
                  sed porttitor scelerisque diam ac.
                </p>
                <p className="about__card--info">
                  Eget tortor egestas est eget tortor ut. Mauris cursus quis
                  eget ut at amet vestibulum. Quam urna phasellus augue
                  porttitor massa. Scelerisque venenatis dolor sed nibh
                  bibendum. A eu, tincidunt elementum scelerisque egestas nulla
                  cras cursus vel. Purus fames curabitur sed turpis tellus
                  egestas massa imperdiet. Eget vitae non sem curabitur
                  adipiscing.
                </p>
                <p className="about__card--info">
                  In viverra vitae ornare tortor, dis ut. Velit, enim non
                  quisque dolor. Urna, amet pellentesque pellentesque est cras
                  ut convallis. Enim tellus ut et sed. Justo nibh vestibulum, in
                  in. Molestie vestibulum vitae proin quisque aliquam ornare.
                  Mauris neque, auctor dolor egestas odio at gravida et mattis.
                  Mauris pharetra eget lobortis risus mattis sit nunc nisl.
                  Volutpat ultricies neque elementum ipsum venenatis placerat
                  libero, nec. Eget risus laoreet leo, scelerisque leo in. Enim
                  facilisis dolor in duis elit quis. Quam praesent risus proin
                  potenti eget. Ultrices adipiscing fringilla tortor tempor
                  fermentum viverra sollicitudin lobortis. Cursus enim, id leo
                  dictum arcu elementum laoreet.
                </p>
                <div className="about__card--info">
                  Vel adipiscing a, sed viverra sed fames pellentesque. Semper
                  elementum leo suspendisse eu eu. Lectus est massa volutpat
                  quam. Sit fermentum consequat nibh in dolor. Integer faucibus
                  nunc mauris magna. Et lacus quis sed purus amet, pellentesque
                  eu enim.
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default AboutPage;
