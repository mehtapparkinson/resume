import React from "react";
import "./Intro.css";
import Memojim from "../../img/1.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi there, My name is</h2>
          <h1 className="i-name">Mehtap Parkinson</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">🇹🇷 Annotation Analyst</div>
              <div className="i-title-item">👩🏽‍💻 FullStack Developer</div>
              <div className="i-title-item">⚖️ Attorney at Law</div>
              <div className="i-title-item">🐱 Cat Lover</div>
              <div className="i-title-item">🍰 Amateur Baker</div>
            </div>
          </div>

          <div className="i-desc">
            <button>
              <a href="https://www.linkedin.com/in/mehtapparkinson" target="_blank" rel="noreferrer">LinkedIn</a>
            </button>
            <button>
              <a href="https://www.github.com/mehtapparkinson" target="_blank" rel="noreferrer">GitHub</a>
            </button>
            <button>
              <a href="https://drive.google.com/file/d/1Jgfub9TWyd7mSape2H2w89JPVC0hseMa/view?usp=share_link" target="_blank" rel="noreferrer">My CV</a>
            </button>
            <br />
            <br />
            <p className="disc">This page is made for internal use only</p>
          </div>
          <p className="arrow">⬇</p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img className="i-img" src={Memojim} alt="" />
      </div>
    </div>
  );
};

export default Intro;
