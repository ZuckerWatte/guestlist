import React from "react";

const ContactFormPage = () => (
  <div className="contact-form-page">
    <h2 className="title">Moin lieber Gast!</h2>
    <span>
      Aktuell sind wir zum Zweck der Nachverfolgung von Infektionsketten
      verpflichtet folgende Kontaktdaten unserer Gäste unter Angabe des Datums
      zu erfassen:
    </span>
    <form className="contact-form">
      <div>
        <input className="form-input" />
        <label className="form-input-label">Vorname</label>
      </div>
      <div>
        <input className="form-input" />
        <label className="form-input-label">Nachname</label>
      </div>
      <div>
        <input className="form-input" />
        <label className="form-input-label">Straße</label>
      </div>
      <div>
        <input className="form-input" />
        <label className="form-input-label">Hausnummer</label>
      </div>
      <div>
        <input className="form-input" />
        <label className="form-input-label">Postleitzahl</label>
      </div>
      <div>
        <input className="form-input" />
        <label className="form-input-label">Ort</label>
      </div>
      <button type="submit">Speichern</button>
    </form>
  </div>
);

export default ContactFormPage;
