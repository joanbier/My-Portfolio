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
    subject_incorrected: "Tytuł musi być dłuzszy niz 3 znaki",
    email_incorrected: "Brak @ w e-mailu",
    textArea_incorrected: "Wiadomość musi być dłuzsza niz 6 znaków"
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

    if (subject.length > 3 && subject.indexOf(" ") === -1) {
      subjectVal = true;
    }
    if (email.indexOf("@") !== -1) {
      emailVal = true;
    }
    if (textarea.length >= 6) {
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
    console.log(validation);
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
    return (
      <div className="form-wrapper">
        <form className="contact-form" onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="subject">
            {" "}
            Subject
            <input
              type="text"
              id="subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              placeholder="Job offer - Front-End Developer"
            />
            {this.state.errors.subject && (
              <span className="error-message">
                {this.messages.subject_incorrected}
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
              placeholder="example@mail.com"
            />
            {this.state.errors.email && (
              <span className="error-message">
                {this.messages.email_incorrected}
              </span>
            )}
          </label>
          <label htmlFor="textarea">
            {" "}
            Message
            <textarea
              placeholder="Hey! We would like to have you in our team. Check out our job offer and join us..."
              id="textarea"
              name="textarea"
              value={this.state.textarea}
              onChange={this.handleChange}
              rows="10"
              cols="50"
            ></textarea>
            {this.state.errors.textarea && (
              <span className="error-message">
                {this.messages.textArea_incorrected}
              </span>
            )}
          </label>
          <button className="send-btn" type="submit">
            Wyślij
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
