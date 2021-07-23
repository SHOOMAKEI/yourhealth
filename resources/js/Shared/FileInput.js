import React, { useState, useRef } from 'react';


export default ({ className, name, label, accept, errors = [], callback }) => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      let base64;
      reader.onload =  function(event) {
          base64 = event.target?.result
          setFile(base64);
          callback(name,base64);
      }
  }

  return (
    <div className={`form-group ${className}  ${errors.length?'is-invalid':''}`}>
        <label  htmlFor={name}>
          {label}
        </label>
    <div className="custom-file pl-2">
        <input
          id={name}
          name={name}
          ref={fileInput}
          accept={accept}
          type="file"
          data-toggle="custom-file-input"
          className="custom-file-input js-custom-file-input-enabled"
          onChange={handleFileChange}
        />
        {label && (
        <label className="custom-file-label" htmlFor={name}>
          {label}
        </label>
      )}

      {errors && <div className="invalid-feedback" style={{display:'block'}}>{errors}</div>}
    </div>
    </div>
  );
}
