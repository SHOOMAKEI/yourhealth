import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`custom-select ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="invalid-feedback " style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
