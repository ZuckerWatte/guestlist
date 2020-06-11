import React from "react";

const FormInput = ({ label, ...inputAttributes }) => (
  <div>
    <input className="form-input" {...inputAttributes} />
    <label className="form-input-label">{label}</label>
  </div>
);

export default FormInput;
