import React from 'react';

export default ({ label, name, className, value, errors = [], ...props }) => {
  return (
    <div className="custom-control custom-switch mb-2">

      <input
        id={name}
        name={name}
        {...props}
        type="checkbox"
        className="custom-control-input"
      />
       {label && (
        <label className="custom-control-label" htmlFor={name}>
          {label}
        </label>
      )}
      {errors && <div className="invalid-feedback " style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
