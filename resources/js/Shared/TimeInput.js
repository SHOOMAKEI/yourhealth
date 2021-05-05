import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className="form-control"
        
      />
      {errors && <div className="invalid-feedback" style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
