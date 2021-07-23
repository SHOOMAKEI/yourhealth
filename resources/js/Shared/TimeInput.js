import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
        <div className="input-group">
            <input
                id={name}
                name={name}
                {...props}
                className="form-control"
                data-toggle="timepicker"
            />
            <div className="input-group-append">
                <span className="input-group-text"><i className="dripicons-clock"/></span>
            </div>
        </div>

      {errors && <div className="invalid-feedback" style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
