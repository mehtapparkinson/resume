import React from "react";
import "./certs.css";
import cert1 from "../../img/3.png";
import cert2 from "../../img/4.png";

const Intro = () => {
  return (
    <div className="c">
      <h2 className="c-intro">My Bootcamp Certifications</h2>
      <div>
        <div className="c-item">
          <div className="c-left">
            <h2 className="c-item">Code First Girls</h2>
            <img className="c-img" src={cert1} alt="" />
            <p className="c-item">Python & Apps</p>
          </div>
          <div className="c-right">
            <h2 className="c-item">MigraCode Barcelona</h2>
            <img className="c-img" src={cert2} alt=""/>
            <p className="c-item">FullStack Web Development</p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Intro;
