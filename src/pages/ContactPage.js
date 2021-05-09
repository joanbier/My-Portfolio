import Form from "../components/Form";
import { ContactWrapper } from "../components/ContactElements";
import content from "../content/index";

const ContactPage = props => {
  const { subtitle, placeholder } = content.contact;
  return (
    <>
      <ContactWrapper id="contact">
        <div className="bcg-cover">
          <h2>{props.lang === "PL" ? "Kontakt" : "Get in Touch"}</h2>
          <p>{props.lang === "PL" ? subtitle.PL : subtitle.ENG}</p>
          <Form placeholder={placeholder} lang={props.lang} />
        </div>
      </ContactWrapper>
    </>
  );
};

export default ContactPage;
