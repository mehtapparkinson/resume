import "./about.css";
import Memoji2 from "../../img/2.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className="a-img" src={Memoji2} alt="memoji" />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">About Me</h2>
        <p className="a-sub">
          🇹🇷 Annotation Analyst for the Turkish Locale since March 2022.
        </p>
        <p className="a-desc">
          👩🏽‍💻 I am a FullStack Developer with a background in Law.
        </p>
        <br />
        <p className="a-desc">
          💻 My coding journey started in 2021 with MigraCode Web Development
          Bootscamp.
        </p>

        <p className="a-desc">
          Ever since, I am committed to improving my skills through constant
          practice that I'm enjoying every step of the way.
        </p>
        <br />
        <h3 className="a-title">Tech Stack:</h3>
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
        <button>Python</button>
        <button>React</button>
        <button>Node.js</button>
        <button>PostgreSQL</button>
        <button>SQL</button>
        <button>Git</button>
        <button>GitHub</button>
        <button>Databases</button>
        <button>Bootstrap</button>
      </div>
    </div>
  );
};

export default About;
