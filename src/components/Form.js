import React, { Component } from "react";
import "./Form.css";
import emailjs from "emailjs-com";

class Form extends Component {
  state = {
    subject: "",
    email: "",
    textarea: "",
    message: "",

    errors: {
      subject: false,
      email: false,
      textarea: false
    }
  };

  messages = {
    subject_incorrected: "The title must be longer than 3 characters",
    email_incorrected: "Missing @ in the e-mail",
    textArea_incorrected: "The message must be longer than 6 characters"
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  formValidation = () => {
    const { subject, email, textarea } = this.state;

    let subjectVal = false;
    let emailVal = false;
    let textAreaVal = false;
    let correct = false;

    if (subject.length > 3) {
      subjectVal = true;
    }
    if (email.indexOf("@") !== -1 && email.indexOf(" ") === -1) {
      emailVal = true;
    }
    if (textarea.length > 6) {
      textAreaVal = true;
    }
    if (subjectVal && emailVal && textAreaVal) {
      correct = true;
    }
    return {
      correct,
      subjectVal,
      emailVal,
      textAreaVal
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();

    if (validation.correct) {
      this.sendEmail(e);

      this.setState({
        subject: "",
        email: "",
        textarea: "",
        accept: false,
        message: "Wiadomość została wysłana",

        errors: {
          subject: false,
          email: false,
          textarea: false,
          accept: false
        }
      });
      console.log("Form wysłany");
    } else {
      this.setState({
        errors: {
          subject: !validation.subjectVal,
          email: !validation.emailVal,
          textarea: !validation.textAreaVal,
          accept: !validation.acceptVal
        }
      });
    }
  };

  sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yvj0sxa",
        "template_pqhh288",
        e.target,
        "user_5VCPAeKnWXPuFf1EFz7mg"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: ""
          }),
        5000
      );
    }
  }

  render() {
    const lang = this.props.lang;
    const placeholder = this.props.placeholder;
    return (
      <div className="form-wrapper">
        <form className="contact-form" onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="subject">
            {" "}
            {lang === "PL" ? "Temat" : "Subject"}
            <input
              type="text"
              id="subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              placeholder={
                lang === "PL" ? placeholder[0].PL : placeholder[0].ENG
              }
            />
            {this.state.errors.subject && (
              <span className="error-message">
                {lang === "PL"
                  ? "Tytuł musi zawierać co najmniej 3 znaki"
                  : this.messages.subject_incorrected}
              </span>
            )}
          </label>
          <label htmlFor="email">
            {" "}
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder={
                lang === "PL" ? placeholder[1].PL : placeholder[1].ENG
              }
            />
            {this.state.errors.email && (
              <span className="error-message">
                {lang === "PL"
                  ? "Brak @ w e-mailu"
                  : this.messages.email_incorrected}
              </span>
            )}
          </label>
          <label htmlFor="textarea">
            {" "}
            {lang === "PL" ? "Wiadomość" : "Message"}
            <textarea
              placeholder={
                lang === "PL" ? placeholder[2].PL : placeholder[2].ENG
              }
              id="textarea"
              name="textarea"
              value={this.state.textarea}
              onChange={this.handleChange}
              rows="10"
              cols="50"
            ></textarea>
            {this.state.errors.textarea && (
              <span className="error-message">
                {lang === "PL"
                  ? "Wiadomość musi być dłuzsza niz 6 znaków"
                  : this.messages.textArea_incorrected}
              </span>
            )}
          </label>
          <button className="send-btn" type="submit">
            {lang === "PL" ? "Wyślij" : "Submit"}
          </button>
        </form>
        {this.state.message && (
          <h3 className="message-send">{this.state.message}</h3>
        )}
      </div>
    );
  }
}

export default Form;
