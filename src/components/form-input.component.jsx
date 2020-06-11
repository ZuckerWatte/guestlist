import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...inputAttributes }) => (
  <div className="group">
    <input className="form-input" {...inputAttributes} />
    <label className="form-input-label">{label}</label>
  </div>
);

export default FormInput;
