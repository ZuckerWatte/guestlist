import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ onChange, label, ...inputAttributes }) => (
  <div className="group">
    <input className="form-input" {...inputAttributes} onChange={onChange} />
    <label
      className={` ${
        inputAttributes.value.length ? "shrink" : ""
      } form-input-label`}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
