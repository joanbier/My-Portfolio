import { SectionWrapper } from "../components/AboutElements";
import { MyDescription } from "../components/MyDescription";
import { MyStack } from "../components/MyStack";
const AboutMePage = props => {
  return (
    <SectionWrapper id="about" className="about-wrapper">
      <h2>{props.lang === "PL" ? "O mnie" : "About Me"}</h2>
      <MyDescription lang={props.lang} />
      <MyStack lang={props.lang} />
    </SectionWrapper>
  );
};

export default AboutMePage;
