import React from "react";
import FormInput from "../components/form-input.component";

const ContactFormPage = () => (
  <div className="contact-form-page">
    <h2 className="title">Moin lieber Gast!</h2>
    <span>
      Aktuell sind wir zum Zweck der Nachverfolgung von Infektionsketten
      verpflichtet folgende Kontaktdaten unserer Gäste unter Angabe des Datums
      zu erfassen:
    </span>
    <form className="contact-form">
      <FormInput label="Vorname" name="firstname" type="text" required />
      <FormInput label="Nachname" name="lastname" type="text" required />
      <FormInput label="Straße" name="street" type="text" required />
      <FormInput label="Hausnummer" name="streetnumber" type="text" required />
      <FormInput label="Postleitzahl" name="zipcode" type="text" required />
      <FormInput label="Ort" name="city" type="text" />
      <button type="submit">Speichern</button>
    </form>
  </div>
);

export default ContactFormPage;
