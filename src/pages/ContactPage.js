import Form from "../components/Form";
import { ContactWrapper } from "../components/ContactElements";

const ContactPage = () => {
  return (
    <>
      <ContactWrapper id="contact">
        <div className="bcg-cover">
          <h2>Get in touch</h2>
          <p>
            If you require any further information,feel free to mail me at
            j.biernat955@gmail.com or use the form below.
          </p>
          <Form />
        </div>
      </ContactWrapper>
    </>
  );
};

export default ContactPage;
