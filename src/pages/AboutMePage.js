import Me from "../images/me.png";
import { SectionWrapper } from "../components/AboutElements";
import { FaCat, FaCode } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { Link } from "react-scroll";

const AboutMePage = props => {
  return (
    <SectionWrapper id="about" className="about-wrapper">
      <h2>{props.lang === "PL" ? "O mnie" : "About"}</h2>
      <div className="me-wrapper">
        <img src={Me} alt="" />
        <div className="hobby-wrapper">
          <div className="hobby-item">
            <FaCat
              style={{
                fontSize: "35px"
              }}
            />
            <p className="hobby-description">Cat Lovers</p>
          </div>
          <div className="hobby-item">
            <FaCode
              style={{
                fontSize: "35px"
              }}
            />
            <p className="hobby-description">Web Development</p>
          </div>
          <div className="hobby-item">
            <GiJourney
              style={{
                fontSize: "35px"
              }}
            />
            <p className="hobby-description">Adventure</p>
          </div>
        </div>
        <div className="description-wrapper">
          <h3>Hello,</h3>
          <p className="description">
            My name is Joanna Biernat and I would like to become a professional
            Front-end Developer. My adventure with programming started about 2
            years ago. I try to keep up with standards. Developing accessible,
            responsive, optimized websites with SEO and performance in mind is a
            priority for me. My main focus lies on the front-end, JavaScript and
            React development. I graduated the "Basic JavaScript + React" at
            CODE:ME academy. Earlier, I finished a few interesting courses on
            Udemy platform. Currently, I am looking for my first job in IT
            sector. In the future, I want to learn Angular.js and get know
            something about back-end development. Now, I still foster and
            improve my programming skills of JavaScript.
          </p>
        </div>
        <Link to="contact" smooth={true} offset={-60}>
          <button>Hire Me</button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default AboutMePage;
