import React from "react";
import FormInput from "../components/form-input.component";
import "./contact-form-page.styles.scss";

class ContactFormPage extends React.Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      street: "",
      streetnumber: "",
      zipcode: "",
      city: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      firstname,
      lastname,
      street,
      streetnumber,
      zipcode,
      city,
    } = this.state;
    return (
      <div className="contact-form-page">
        <h2 className="title">Moin lieber Gast!</h2>
        <span>
          Aktuell sind wir zum Zweck der Nachverfolgung von Infektionsketten
          verpflichtet folgende Kontaktdaten unserer Gäste unter Angabe des
          Datums zu erfassen:
        </span>
        <form className="contact-form">
          <FormInput
            label="Vorname"
            value={firstname}
            name="firstname"
            type="text"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Nachname"
            value={lastname}
            name="lastname"
            type="text"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Straße"
            value={street}
            name="street"
            type="text"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Hausnummer"
            value={streetnumber}
            name="streetnumber"
            type="text"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Postleitzahl"
            value={zipcode}
            name="zipcode"
            type="text"
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Ort"
            value={city}
            name="city"
            type="text"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Speichern</button>
        </form>
      </div>
    );
  }
}

export default ContactFormPage;
