import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className="custom-control custom-checkbox mb-2">

      <input
        id={name}
        name={name}
        {...props}
        type="checkbox"
        className="custom-control-input"

      />
       {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      {errors && <div className="invalid-feedback " style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
