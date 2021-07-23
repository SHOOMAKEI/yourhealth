import React from 'react';

export default ({ label, name, className, errors = [],value, ...props }) => {
  return (
    <div className={`form-group ${className} ${errors.length?'is-invalid':''}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        {...props}
        className={`form-input form-control ${errors.length ? 'error' : ''}`}
        rows="2"
        value={value? value:""}
      ></textarea>
      {errors && <div className="invalid-feedback" style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
