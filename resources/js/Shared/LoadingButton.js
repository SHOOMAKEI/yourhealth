import React from 'react';

export default ({ loading, className, children, ...props }) => {
  return (
    <button
      disabled={loading}
      className={`focus:outline-none flex items-center ${className}`}
      {...props}
    >
      {loading && <span className="spinner-border spinner-border-sm mr-2 mb-0" role="status" aria-hidden="true"></span>}
      {children}
    </button>
  );
};
